import React from 'react'
import styled from 'styled-components'
import Profile from '../assets/profile.jpeg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--about-bg);
  color: var(--about-content);
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  gap: 4rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    margin: 100px;
  }
`

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 400px;
    width: auto;
    object-fit: cover;
    border-radius: 15%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 480px) and (hover: none) {
      height: 300px;
      box-shadow: 8px 8px 0px 0 var(--about-accent);
    }

    @media screen and (min-width: 480px) and (hover: none) {
      box-shadow: 10px 10px 0px 0 var(--about-accent);
    }

    @media screen and (hover: hover) {
      &:hover {
        box-shadow: 10px 10px 0px 0 var(--about-accent);
      }
    }
  }
`

const Content = styled.div`
  width: 100%;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1em;
    color: var(--about-accent);

    @media screen and (max-width: 480px) {
      margin-bottom: 2rem;
      font-size: 1.3rem;
    }
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5em;
    line-height: 0.9;
    color: var(--about-accent);

    @media screen and (max-width: 480px) {
      margin-bottom: 1em;
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1em 0;
    text-align: justify;

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
`

const About = () => {
  return (
    <Container>
      <Wrapper>
        <ImgWrap>
          <img src={Profile} />
        </ImgWrap>
        <Content>
          <h2>/ About Me</h2>
          <h1>Full-Stack Developer & Designer</h1>
          <p>
            Quis amet tempor irure mollit tempor incididunt exercitation magna
            laboris ad excepteur. Cillum non dolore eiusmod id anim minim
            laboris sit ullamco ut occaecat ullamco anim. Amet nulla laboris
            culpa dolor Lorem eu. Veniam veniam amet dolor deserunt sunt ex
            amet. Tempor labore aute pariatur consequat officia dolor.
          </p>
          <p>
            Minim qui ad incididunt id. Quis amet tempor irure mollit tempor
            incididunt exercitation magna laboris ad excepteur. Cillum non
            dolore eiusmod id anim minim laboris sit ullamco ut occaecat ullamco
            anim.
          </p>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default About
