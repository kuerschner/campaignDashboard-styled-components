import React, { useState, useEffect } from 'react'

const CampaignForm = ({
  openId, 
  tableData, 
  setTableData, 
  setIsOpen, 
  isNewCampaign, 
  setIsNewCampaign
}) => {

  const id = openId - 1 

  const newTableData = tableData

  const [values, setValues] = useState({
    id: openId,
    name: '',
    text: '',
    status: 'Preview',
    segment_id: 1,
    media: '',
    stats: null,
  })

  
  useEffect(() => {
    tableData[id] && setValues(tableData[id])
    if(tableData[id] && !tableData[id].media ) {
      setValues({...tableData[id], media: ''})
    }
  },[id, tableData])


  const handleSubmit = e => {
    e.preventDefault()
    newTableData.splice(id, 1, values)
    setTableData([...newTableData])
    setIsOpen(false)
    isNewCampaign ? alert('Successfully added campaign') : alert('Successfully updated campaign')
    setIsNewCampaign(false)
  }

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleChange}
        value={values.name}
      />
      <label htmlFor="text">Text:</label>
      <textarea
        id="text"
        name="text"
        onChange={handleChange}
        value={values.text}
      />
      <label htmlFor="media">Media:</label>
      <input
        id="media"
        name="media"
        type="text"
        onChange={handleChange}
        value={values.media}
      />
      <button type="submit">Save</button>
    </form>
 )
}

export default CampaignForm
