import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomBtn from '~/Components/CustomBtn/CustomBtn'
import CustomText, { TEXT_TYPE } from '~/Components/CustomText'
import { FlexBoxColumnCenter, FlexBoxSpaceBetween } from '~/Components/StyleComponents'
import { Colors, Images } from '~/Themes'
// import { handleLogout } from '~/api/interceptors'
import { useAppDispatch } from '~/Hooks/useAppSelector'
import { AuthReduxActions } from '~/ReduxSaga/Auth/AuthRedux'
import { handleLogout } from '~/api/interceptors'
import { IconLogoutContainer, Item, ListItem } from './style'

function Sidebar() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState<number>()

  useEffect(() => {
    const fullUrl = window.location.href
    const pathname = extractTextFromUrl(fullUrl)
    switch (pathname) {
      case 'employer':
        setIsActive(2)
        break
      case 'candidate':
        setIsActive(3)
        break
      case 'news':
        setIsActive(4)
        break
      case 'setting-price':
        setIsActive(5)
        break
      case 'setting-adv':
        setIsActive(6)
        break
      case 'setting-cv':
        setIsActive(7)
        break
      case 'setting-password':
        setIsActive(8)
        break
      case 'posts':
        setIsActive(9)
        break
      case 'setting-program':
        setIsActive(10)
        break

      default:
        setIsActive(1)
        break
    }
  }, [])

  const extractTextFromUrl = (url: string) => {
    // Split the URL by '/' and get the last segment
    const segments = url.split('/')
    return segments[segments.length - 1]
  }

  // const navigate = useNavigate()
  const handleLogoutSideBar = async () => {
    await handleLogout()
    dispatch(AuthReduxActions.loginFailed({}))
    navigate('/login')
  }
  const handleActiveSidebar = (value: number) => {
    setIsActive(value)
  }

  return (
    <>
      <FlexBoxColumnCenter style={{ marginTop: 40 }}>
        <img width={'130px'} src='https://bizweb.dktcdn.net/100/347/923/themes/742041/assets/logo.png?1675482347581' alt='logo' />
      </FlexBoxColumnCenter>
      <ListItem>
        <Link to='/'>
          <Item isActive={isActive === 1} onClick={() => handleActiveSidebar(1)}>
            <FlexBoxSpaceBetween>
              {/* {isActive === 1 ? <DashboardIconActive /> : <DashboardIcon />} */}
              <CustomText
                type={TEXT_TYPE.primary_16_700}
                customStyle={{ color: isActive === 1 ? Colors.white : Colors.primary }}
              >
                Trang chủ
              </CustomText>
            </FlexBoxSpaceBetween>
          </Item>
        </Link>

        <Link to={'/product'}>
          <Item isActive={isActive === 2} onClick={() => handleActiveSidebar(2)}>
            <FlexBoxSpaceBetween>
              {/* {isActive === 2 ? <MenuIconActive /> : <MenuIcon />} */}
              <CustomText
                type={TEXT_TYPE.primary_16_700}
                customStyle={{ color: isActive === 2 ? Colors.white : Colors.primary }}
              >
                Sản phẩm
              </CustomText>
            </FlexBoxSpaceBetween>
          </Item>
        </Link>

        <Link to={'/candidate'}>
          <Item isActive={isActive === 3} onClick={() => handleActiveSidebar(3)}>
            <FlexBoxSpaceBetween>
              {/* {isActive === 3 ? <OrderIconActive /> : <OrderIcon />} */}
              <CustomText
                type={TEXT_TYPE.primary_16_700}
                customStyle={{ color: isActive === 3 ? Colors.white : Colors.primary }}
              >
                Tài khoản
              </CustomText>
            </FlexBoxSpaceBetween>
          </Item>
        </Link>

        <Link to={'/setting'}>
          <Item isActive={isActive === -1} onClick={() => handleActiveSidebar(5)}>
            <FlexBoxSpaceBetween>
              {/* {isActive === 5 ? <SettingIconActive /> : <SettingIcon />} */}
              <CustomText type={TEXT_TYPE.primary_16_700}>Cài đặt</CustomText>
            </FlexBoxSpaceBetween>
          </Item>
        </Link>
      </ListItem>
      <IconLogoutContainer onClick={handleLogoutSideBar}>
        <CustomBtn
          width={'170px'}
          startIcon={<img src={Images.logoutIcon} alt='#s' />}
          type='outlined'
          text='Đăng xuất'
        />
      </IconLogoutContainer>
    </>
  )
}

export default Sidebar
