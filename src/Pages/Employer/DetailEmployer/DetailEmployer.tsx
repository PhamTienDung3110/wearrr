import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch } from '~/Hooks/useAppSelector'
import { CommonReduxActions } from '~/ReduxSaga/Common/CommonRedux'
import { HRReduxActions } from '~/ReduxSaga/HR/HRRedux'
import InfoEmployer from './components/InfoEmployer'
import TabInfo from './components/TabInfo'

function DetailEmployer() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const [value, setValue] = React.useState(0)

  // add breadcrumbs
  useEffect(() => {
    dispatch(
      CommonReduxActions.setDataBreadcrumbs({
        text: 'CHI TIẾT SẢN PHẨM',
        isShowBackIcon: true,
        backFunc: () => navigate('/employer')
      })
    )
  }, [])

  useEffect(() => {
    dispatch(HRReduxActions.DetailHRRequest({ id }))
  }, [])

  return (
    <>
      {/* <InfoEmployer setValue={setValue} value={value} /> */}
      <TabInfo />
    </>
  )
}

export default DetailEmployer
