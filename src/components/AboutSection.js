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
    border-radius: 20%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 450px) {
      height: 300px;
    }

    @media screen and (hover: hover) {
      &:hover {
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.6);
      }
    }
  }
`

const Content = styled.div`
  width: 100%;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5em;

    @media screen and (max-width: 768px) {
      text-align: center;
    }

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin: 1em 0;
    font-weight: 300;
    text-align: justify;

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
`

const AboutSection = () => {
  return (
    <Container>
      <Wrapper>
        <ImgWrap>
          <img src={Profile} />
        </ImgWrap>
        <Content>
          <h1>About Me</h1>
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

export default AboutSection
