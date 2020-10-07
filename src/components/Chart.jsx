import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components'

const ChartContainer = styled.div`
  svg {overflow: visible;}
`

const Chart = ({data}) =>  (
  <ChartContainer>
    <PieChart 
      data={data} 
      label={({dataEntry}) => dataEntry.title}
      labelStyle={(index) => ({
        fill: data[index].color,
        fontSize: '5px',
        fontFamily: 'sans-serif',
      })}
      radius={42}
      labelPosition={112}
      />
  </ChartContainer>
)


export default Chart
