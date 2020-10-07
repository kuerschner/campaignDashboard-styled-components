import React from 'react'
import styled from 'styled-components'
import CampaignForm from './CampaignForm'
import { MdClose } from 'react-icons/md'

const DrawerContainer = styled.div`
  position: fixed;
  z-index: 9999;
  right: 0;
  height: 100%;
  background-color: #fff;
  box-shadow: ${props => props.isOpen ? '-10px 0px 10px 1px #B8B8B8' : 'none'};
  padding: ${props => props.isOpen ? '1rem': '0px'};
  width: ${props => props.isOpen ? '500px': '0px'};
  overflow: hidden;
  transition: 250ms ease-in-out;

  form {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    input {
      padding: 0.5rem;
      margin: 0.25rem 0;
    }
    button {
      color: #fff;
      background-color: #0f3ddf;
      border: 1px solid #0f3ddf;
      max-width: 200px;
      padding: 1rem;
      margin: 1rem 0;
    }
    button:hover {
      color: #0f3ddf;
      background-color: #fff;
    }
  }
`

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Drawer = ({
  isOpen, 
  setIsOpen, 
  openId, 
  tableData, 
  setTableData, 
  isNewCampaign, 
  setIsNewCampaign
}) => { 

  return (
    <DrawerContainer isOpen={isOpen}>
      <DrawerHeader>
        <h2>Create / Edit Campaign</h2>
        <MdClose size={28} onClick={() => setIsOpen(false)}/>
      </DrawerHeader>
      <CampaignForm 
        openId={openId}
        tableData={tableData}
        setTableData={setTableData} 
        setIsOpen={setIsOpen}
        isNewCampaign={isNewCampaign}
        setIsNewCampaign={setIsNewCampaign}
      />
    </DrawerContainer>
  )
}
export default Drawer
