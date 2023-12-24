// src/BarChart.js
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import * as echarts from 'echarts'
import moment from 'moment'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import CustomText, { TEXT_TYPE } from '~/Components/CustomText'
import { FlexBox, FlexBoxAlignCenter, FlexBoxColumn, FlexBoxSpaceBetween } from '~/Components/StyleComponents'
import { Colors, Images } from '~/Themes'
import Utilities from '~/Utils/Util'

const BarChart = () => {
  const [year, setYear] = useState(moment().year())
  const handleChange = (event: any) => {
    setYear(event.target.value)
  }

  useEffect(() => {
    const chart = echarts.init(document.getElementById(`bar-chart`))

    const option = {
      tooltip: {
        trigger: 'axis'
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Giày',
          type: 'bar',
          data:  new Array(12).fill(15, 4, 9),
          itemStyle: {
            color: Colors.secondary // Màu sắc cho series 'Giày'
          },
          label: {
            show: true,
            position: 'top',
            color: Colors.secondary // Màu sắc cho nhãn 'Giày'
          },
          barWidth: 20
        },
        {
          name: 'Quần áo',
          type: 'bar',
          data: new Array(12).fill(7),
          itemStyle: {
            color: Colors.primary // Màu sắc cho series 'Giày'
          },
          label: {
            show: true,
            position: 'top',
            color: Colors.primary // Màu sắc cho nhãn 'Giày'
          },
          barWidth: 20
        }
      ]
    }

    chart.setOption(option)

    // Cleanup the chart when the component unmounts
    return () => {
      chart.dispose()
    }
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
    <PieContainer>
      <FlexBoxSpaceBetween style={{ padding: '10px 20px', alignItems: 'start' }}>
        <div>
          <CustomText type={TEXT_TYPE.primary_20_700}>Báo cáo doanh thu thực nhận theo năm</CustomText>
          <FlexBox style={{ gap: 30, margin: '15px 0' }}>
            <FlexBoxColumn>
              <CustomText type={TEXT_TYPE.primary_20_700}>
                {Utilities.numberWithCommas('20000000')}
              </CustomText>
              <CustomText type={TEXT_TYPE.darkGrey_14_400}>Tổng doanh thu</CustomText>
            </FlexBoxColumn>
            <FlexBoxColumn>
              <CustomText type={TEXT_TYPE.primary_20_700}>
                0
              </CustomText>
              <CustomText type={TEXT_TYPE.darkGrey_14_400}>Giày</CustomText>
            </FlexBoxColumn>
            <FlexBoxColumn>
              <CustomText type={TEXT_TYPE.primary_20_700}>
              0
              </CustomText>
              <CustomText type={TEXT_TYPE.darkGrey_14_400}>Quảng cáo</CustomText>
            </FlexBoxColumn>
            <FlexBoxColumn>
              <FlexBoxAlignCenter>
                <img
                  width={'24px'}
                  src={
                    checkPercentAndTrend(25000000, 30000000).trend
                      ? Images.chartDown
                      : Images.chartUp
                  }
                  alt='#'
                />
                <CustomText type={TEXT_TYPE.primary_18_700} customStyle={{ color: Colors.greenColor }}>
                  {checkPercentAndTrend(12000000, 32000000).percent}
                  %
                </CustomText>
              </FlexBoxAlignCenter>
              <CustomText type={TEXT_TYPE.darkGrey_14_400}>So sánh doanh thu với năm trước</CustomText>
            </FlexBoxColumn>
          </FlexBox>
          <CustomText type={TEXT_TYPE.darkGrey_16_400}>(Đơn vị: triệu VNĐ)</CustomText>
        </div>
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Năm</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={year}
                label='Year'
                onChange={handleChange}
              >
                <MenuItem value={moment().year()}>{moment().year()}</MenuItem>
                <MenuItem value={moment().subtract(1, 'years').format('YYYY')}>
                  {moment().subtract(1, 'years').format('YYYY')}
                </MenuItem>
                <MenuItem value={moment().subtract(2, 'years').format('YYYY')}>
                  {moment().subtract(2, 'years').format('YYYY')}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </FlexBoxSpaceBetween>
      <div id={`bar-chart`} style={{ width: '100%', height: '550px' }}></div>
    </PieContainer>
  )
}

export default BarChart

const PieContainer = styled.div`
  box-shadow: 0px 3px 10px 0px #00000040;
  padding: 10px 0px;
  border-radius: 8px;
`
