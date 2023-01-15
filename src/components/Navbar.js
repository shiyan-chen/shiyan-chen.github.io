import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  height: 80px;
  margin-top: -80px;
  top: 0;
  background: var(--navbar-bg);
  color: var(--navbar-content);
  z-index: 999;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-family: Lobster;
  cursor: pointer;
`

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;
`

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (hover: hover) {
    &:hover {
      background-color: var(--navbar-content);
      color: var(--navbar-bg);
      transition: all 0.3s ease-in-out;
    }
  }
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Shiyan</Logo>
        <Items>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Projects</Item>
          <Item>Contact</Item>
        </Items>
        <Btn>Download CV</Btn>
      </Wrapper>
    </Container>
  )
}

export default Navbar
