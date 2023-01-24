import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FaBars } from 'react-icons/fa'
import { Button } from './Button'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  height: 80px;
  margin-top: -80px;
  top: ${({ scrollDirection }) => (scrollDirection === 'down' ? '-80px' : '0')};
  background: var(--navbar-bg);
  color: var(--navbar-content);
  z-index: 999;
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? '0 4px 8px 0 rgba(0, 0, 0, 0.1)' : 'none'};
  transition: 0.4s all ease;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    ${Button} {
      display: none;
    }
  }
`

const Logo = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: Lobster;
  cursor: pointer;
`

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 60px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Item = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;

  @media screen and (hover: hover) {
    &:hover {
      color: var(--navbar-accent);
    }
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block: auto;
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`

// https://www.robinwieruch.de/react-hook-scroll-direction/

const THRESHOLD = 20

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = React.useState('up')
  const blocking = React.useRef(false)
  const prevScrollY = React.useRef(0)

  React.useEffect(() => {
    prevScrollY.current = window.pageYOffset
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection = scrollY > prevScrollY.current ? 'down' : 'up'
        setScrollDirection(newScrollDirection)
        prevScrollY.current = scrollY > 0 ? scrollY : 0
      }
      blocking.current = false
    }

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true
        window.requestAnimationFrame(updateScrollDirection)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDirection])

  return scrollDirection
}

const Navbar = ({ toggleSidebar }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    setScrollNav(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <Container scrollNav={scrollNav} scrollDirection={useScrollDirection()}>
      <Wrapper>
        <Logo href='#hero'>Shiyan</Logo>
        <MobileIcon onClick={toggleSidebar}>
          <IconContext.Provider value={{ color: 'black' }}>
            <FaBars />
          </IconContext.Provider>
        </MobileIcon>
        <Items>
          <Item href='#hero'>Home</Item>
          <Item href='#about'>About</Item>
          <Item href='#projects'>Projects</Item>
          <Item href='#contact'>Contact</Item>
        </Items>
        <Button>
          <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
            My Resume
          </a>
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
