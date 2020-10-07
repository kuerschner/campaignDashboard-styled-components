import React, { useState, useEffect } from 'react'
import { AiOutlineFileSearch, AiOutlineSend } from 'react-icons/ai'
import { Chart, Drawer, Table } from '../../components'
import { campaigns, segments } from '../../data/campaigns.json'
import { 
  ContentContainer, 
  ChartContainer, 
  TableContainer, 
  QuoteContainer, 
  CampaignName,
  GoodText, 
  BadText, 
  Img, 
  CreateButton
} from './styled-components'

const Dashboard = () => {
  const [chartData, setChartData] = useState([])
  const [tableData, setTableData] = useState(campaigns)
  const [isOpen, setIsOpen] = useState(false)
  const [openId, setOpenId] = useState(0)
  const [quote, setQuote] = useState({})
  const [isNewCampaign, setIsNewCampaign] = useState(false)

  const createNewId = () => {
    const idArray = []
    tableData.forEach(item => idArray.push(item.id))

    const highestId = Math.max(...idArray)

    return highestId + 1
  }

  useEffect(() => {
    // Set data for pie chart
    const data = []
    const pieChart1Colors = ['#0f3ddf', '#2667FF', '#87BFFF']

    segments.forEach((segment) =>
      segment.id !== 1 && data.push({
        title: segment.name,
        value: segment.subscribers_count/segments[0].subscribers_count,
        color: pieChart1Colors[segment.id - 1],
      })
    )
    setChartData(data)


    // Fetch and set random motivational quote
    fetch("https://type.fit/api/quotes")
      .then(response =>  {
        return response.json();
      })
      .then(data => {
        setQuote(data[Math.floor(Math.random() * Math.floor(100))])
      });
  }, [])

  // Column configuration and custom rendering for table
  const columns = [
    { title: 'Campaign Name', field: 'name', render: rowData => <CampaignName onClick={() => {
        setOpenId(rowData.id)
        setIsOpen(true)
    }}>{rowData.name}</CampaignName>},
    { title: 'Status', field: 'status', align: 'center', render: rowData => rowData.status === 'Preview' ? <AiOutlineFileSearch size={26} color='blue'  /> : <AiOutlineSend size={26} color='green'/> },
    { title: 'Text', field: 'text' },
    { title: 'Segment', field: 'segment_id', lookup: {1: `${segments[0].name} (${segments[0].subscribers_count})`, 2: `${segments[1].name} (${segments[1].subscribers_count})`, 3: `${segments[2].name} (${segments[2].subscribers_count})`} },
    { title: 'Sent', field: 'stats', render: rowData => rowData.status !== 'Preview' && <p>{rowData.stats.sent}</p> },
    { title: 'Clicked', field: 'stats', render: rowData => rowData.status !== 'Preview' && <>{rowData.stats.clicked > rowData.stats.sent / 2 ? <GoodText>{rowData.stats.clicked}</GoodText> : <BadText>{rowData.stats.clicked}</BadText>}</>},
    { title: 'Media', field: 'media', render: rowData => rowData.media && <Img src={rowData.media} alt={`media for ${rowData.name} campaign`} /> },
  ]

  return (
    <>
    <Drawer 
      isOpen={isOpen} 
      setIsOpen={setIsOpen}
      openId={openId} 
      tableData={tableData} 
      setTableData={setTableData}
      isNewCampaign={isNewCampaign}
      setIsNewCampaign={setIsNewCampaign}
     />
    <ContentContainer>
      <h2>Campaigns</h2>
      <ChartContainer>
        <h3>Segments</h3>
        <Chart title='Segments' data={chartData} />
        <QuoteContainer>
          <h3>{quote.text}</h3>
          {quote.author && <p>- {quote.author}</p>}
          <CreateButton onClick={() => {
            setOpenId(createNewId())
            setIsNewCampaign(true)
            setIsOpen(true)
          }}>+ Create Campaign</CreateButton>
        </QuoteContainer>
      </ChartContainer>
      
      <TableContainer>
        <Table columns={columns} data={tableData} />
      </TableContainer>
    </ContentContainer>
    </>
  )
}

export default Dashboard
