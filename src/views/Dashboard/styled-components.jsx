import styled from 'styled-components'

export const ContentContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;

  h2 {
    margin: 0 2rem;
  }

`

export const ChartContainer = styled.div`
  display: flex;
  max-width: 50%;
  margin: auto;

`

export const TableContainer = styled.div`
  margin: 1rem;
`

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`
export const CampaignName = styled.p`
  font-weight: bold;
  color: #0f3ddf;
  cursor: pointer;
`

export const GoodText = styled.p`
  color: green;
`
export const BadText = styled.p`
  color: red;
`
export const Img = styled.img`
  height: 100px;
  width: 100px;
`

export const CreateButton = styled.button`
  color: #fff;
  background-color: #0f3ddf;
  border: 1px solid #0f3ddf;
  max-width: 200px;
  padding: 1rem;
  margin: 1rem 0;

  &:hover {
    color: #0f3ddf;
    background-color: #fff;
  }
`