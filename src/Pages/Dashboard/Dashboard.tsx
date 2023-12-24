import { useEffect } from 'react'
import CustomText, { TEXT_TYPE } from '~/Components/CustomText'
import { FlexBoxAlignCenter } from '~/Components/StyleComponents'
import { useAppDispatch } from '~/Hooks/useAppSelector'
import { CommonReduxActions } from '~/ReduxSaga/Common/CommonRedux'
import { Images } from '~/Themes'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import RevenueCard from './components/RevenueCard'
import StaticCard from './components/StaticCard'

function Dashboard() {
  const dispatch = useAppDispatch()

  // add breadcrumbs
  useEffect(() => {
    dispatch(CommonReduxActions.setDataBreadcrumbs({ text: 'TRANG CHỦ' }))
  }, [])

  const checkPercentAndTrend = (preMonth: number, inMonth: number) => {
    if (preMonth === 0) {
      preMonth = 1
    }
    if (inMonth === 0) {
      preMonth = 1
    }
    if (inMonth >= preMonth) {
      return {
        trend: false,
        percent: Number((((inMonth - preMonth) / preMonth) * 100).toFixed(2))
      }
    } else {
      return {
        trend: true,
        percent: Number((((inMonth - preMonth) / preMonth) * 100).toFixed(2))
      }
    }
  }

  return (
    <div>
      <div style={{ marginTop: '30px' }}>
        <CustomText type={TEXT_TYPE.primary_20_700}>Số liệu tháng này</CustomText>
        <FlexBoxAlignCenter style={{ gap: 30, marginTop: '15px' }}>
          <StaticCard
            number={24}
            name={'Tổng đơn hàng'}
            imgIcon={Images.postIcon}
          />
          <StaticCard
            number={12}
            name={'Đơn hàng chưa xử lý'}
            imgIcon={Images.postIcon}
          />
          <StaticCard
            number={8}
            name={'Đơn hàng đang giao'}
            imgIcon={Images.postIcon}
          />
          <StaticCard
            number={4}
            name={'Đơn hoàn thành'}
            imgIcon={Images.postIcon}
          />
        </FlexBoxAlignCenter>
      </div>
      <div style={{ marginTop: '30px' }}>
        <CustomText type={TEXT_TYPE.primary_20_700}>Doanh thu tháng này</CustomText>
        <FlexBoxAlignCenter style={{ gap: 30, marginTop: '15px' }}>
          <div style={{ width: 'calc(100% - 330px)' }}>
            <RevenueCard
              number={15000000}
              name={'Tổng doanh thu'}
              imgChartIcon={Images.chartOrangeIcon}
              percent={
                checkPercentAndTrend(12000000, 15000000).percent
              }
              isDown={checkPercentAndTrend(12000000, 15000000).trend}
            />
          </div>
          <div>
            <PieChart
              id={1}
              ntd={14000000}
              adv={12000000}
            />
          </div>
        </FlexBoxAlignCenter>
      </div>
      <div style={{ marginTop: '30px' }}>
        <BarChart />
      </div>
    </div>
  )
}

export default Dashboard
