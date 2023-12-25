import { Popover, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import CustomDialog from '~/Components/CustomDialog/CustomDialog'
import { useAppDispatch } from '~/Hooks/useAppSelector'
import { HRReduxActions } from '~/ReduxSaga/HR/HRRedux'
import { Images } from '~/Themes'

interface ActionColumnProps {
  id: string
  status: string
  isTopHr: boolean
  setOpenDialog: (isOpen: boolean) => void
  setCurrentUserClick: (id: string) => void
}

function ActionColumn({ id, status, isTopHr, setOpenDialog, setCurrentUserClick }: ActionColumnProps) {
  const navigate: NavigateFunction = useNavigate()
  const dispatch = useAppDispatch()

  const [popoverAnchor, setPopoverAnchor] = useState<null | HTMLElement>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setPopoverAnchor(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setPopoverAnchor(null)
  }
  const [openDialogBlockUser, setOpenDialogBlockUser] = useState(false)

  const handleCloseDelProduct = () => {
    setOpenDialogBlockUser(false)
  }

  const handleConfirmDelete = () => {
    dispatch(HRReduxActions.DelProductRequest({ id: id, status: status, fromScreen: 'list' }))
    handleCloseDelProduct()
  }

  const open = Boolean(popoverAnchor)
  return (
    <div>
      <Tooltip title=''>
        <img onClick={handlePopoverOpen} style={{ cursor: 'pointer' }} width={'18px'} src={Images.actionTable} alt='' />
      </Tooltip>
      <Popover
        open={open}
        anchorEl={popoverAnchor}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '8px',
            marginTop: '5px'
          }
        }}
      >
        <Typography style={{ padding: '5px 16px' }}>
          <div>
            <ImgContainer onClick={() => navigate(`/employer/detail/${id}`)}>
              <ImgIcon src={Images.viewIcon} alt='#' />
              Xem chi tiết
            </ImgContainer>
            <ImgContainer onClick={() => setOpenDialogBlockUser(true)}>
              <ImgIcon src={Images.deleteIcon} alt='#' />
              Xóa sản phẩm
            </ImgContainer>
          </div>
        </Typography>
      </Popover>
      <CustomDialog
        open={openDialogBlockUser}
        onClose={handleCloseDelProduct}
        onConfirm={handleConfirmDelete}
        title={'Xóa sản phẩm'}
        content={'Bạn có chắc chắn muốn xóa vĩnh viễn sản phẩm này không?'}
      />
    </div>
  )
}

export default ActionColumn

const ImgIcon = styled.img`
  width: 16px;
  margin: 0 10px -2px 0;
`

const ImgContainer = styled.div`
  cursor: pointer;
  margin: 15px 10px;
`
