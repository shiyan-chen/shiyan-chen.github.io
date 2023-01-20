import React from 'react'
import styled from 'styled-components'
import Connect from '../assets/mail.svg'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--contact-bg);
  color: var(--contact-content);
  padding-bottom: 100px;

  @media screen and (max-width: 480px) {
    padding-bottom: 0;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  gap: 4rem;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    margin-inline: 200px;
    height: 100%;
  }
`

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: auto;
    width: 400px;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      width: 300px;
    }
  }
`

const Content = styled.div`
  width: 100%;
`

const Btn = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  border: 1px solid var(--navbar-content);
  border-radius: 50px;
  cursor: pointer;

  @media screen and (hover: hover) {
    &:hover {
      background-color: var(--navbar-accent);
      border: 1px solid var(--navbar-accent);
      color: var(--navbar-bg);
    }
  }
`

const Contact = () => {
  return (
    <Container id='contact'>
      <Wrapper>
        <Content>
          <h2># Contact</h2>
          <h1>Let's Connect</h1>
          <p>
            I am currently looking for coop and internship opportunities from
            May 2023 to May 2024. If you'd like to offer me an internship or job
            opportunity or any other form of cooperation, welcome to email me.
          </p>
          <Btn>
            <a
              href='mailto:c.shiyan22@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Say Hello
            </a>
          </Btn>
        </Content>
        <ImgWrap>
          <img src={Connect} />
        </ImgWrap>
      </Wrapper>
    </Container>
  )
}

export default Contact
