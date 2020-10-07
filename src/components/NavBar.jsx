import React from 'react'
import styled from 'styled-components'
import { MdPerson, MdSettings } from 'react-icons/md'

const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  height: 80px;
  background-color: #0f3ddf;
  width: 100%;
  color: #fff;
  font-family: sans-serif;
  z-index: 99999;
`

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`
const DummySearchInput = styled.input`
  background-color: #0f3ddf;
  border: 1px solid #3261fb;
  color: #3261fb;
  margin: 0 1rem;
  padding: 0.5rem;
  border-radius: 4px;
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoLink = styled.a`
  text-decoration: none;
  color: #fff;
`

const NavBar = () => {
  return (
    <NavBarContainer>
      <ContentContainer>
        <LogoLink href='/'><h1>Demo Dashboard</h1></LogoLink>
        <UserContainer>
          <DummySearchInput placeholder='Search subscribers' />
          <p>51,641</p>
          <MdPerson size={32} />
        </UserContainer>
        <MdSettings size={32} />
      </ContentContainer>
    </NavBarContainer>
  )
}

export default NavBar
