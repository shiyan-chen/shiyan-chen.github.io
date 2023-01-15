import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: -2;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 1100px;
  width: 100%;
  height: 100%;
  margin: 0 24px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const Content = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-right: 50px;

  @media screen and (max-width: 1000px) {
    margin-inline: 50px;
    text-align: center;
  }

  h2 {
    font-size: 5rem;
    font-family: var(--font-display);
    color: var(--hero-content);
  }

  h1 {
    font-size: 5rem;
    font-family: var(--font-display);
    line-height: 0.9;
    color: var(--hero-content);
    white-space: nowrap;
  }

  p {
    padding-top: 2rem;
    font-size: 2rem;
    font-weight: bold;
    color: var(--hero-subtitle);
  }
`

const HeroSection2 = () => {
  return (
    <Container>
      <Wrapper>
        <Content />
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

export default HeroSection2
