import Breadcrumbs from '~/Components/Breadcrumbs/Breadcrumbs'
import { FlexBoxSpaceBetween, FlexCenter } from '~/Components/StyleComponents'
import * as S from './style'
import CustomText, { TEXT_TYPE } from '~/Components/CustomText'
import { Images } from '~/Themes'
import { useAppSelector } from '~/Hooks/useAppSelector'
import { RootState } from '~/Config/ReduxConfig/Store'

function Header() {
  const { profile } = useAppSelector((state: RootState) => state.auth)
  return (
    <S.HeaderContainer>
      <S.HeaderInfo>
        <FlexBoxSpaceBetween style={{ width: '100%' }}>
          <Breadcrumbs />
          <FlexCenter>
            <CustomText type={TEXT_TYPE.primary_20_700} customStyle={{ marginRight: '10px' }}>
              {profile?.fullName || 'Trần Lê Trọng'}
            </CustomText>
            <img width='35px' src={Images.userIcon} alt='#' />
          </FlexCenter>
        </FlexBoxSpaceBetween>
      </S.HeaderInfo>
    </S.HeaderContainer>
  )
}

export default Header
