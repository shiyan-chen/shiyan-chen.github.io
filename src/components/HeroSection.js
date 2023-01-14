import React from 'react'
import styled from 'styled-components'

import NotionAvatar from '../assets/notion-avatar.svg'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
`

const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 25px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  h2 {
    font-size: 3rem;
    font-family: Lobster, 'Abril Fatface', sans-serif;
  }

  h1 {
    font-size: 5rem;
    font-family: Lobster, 'Abril Fatface', sans-serif;
    white-space: nowrap;
    margin-top: -1rem;
  }

  p {
    padding-top: 1rem;
    font-size: 2rem;
  }
`

const Avatar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  img {
    max-width: 400px;
    margin-top: -2rem;
  }
`

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Avatar>
          <img src={NotionAvatar} alt='notion avatar' />
        </Avatar>
        <Content>
          <h2>Hi, I'm</h2>
          <h1>Shiyan Chen.</h1>
          <p>
            I'm a full-stack software developer & designer from San Jose, CA.
          </p>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Hero
