import React from 'react'
import styled from 'styled-components'

import { FaGithub } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  max-width: 350px;
  height: 350px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid black;
  border-radius: 0px;
`

const Img = styled.img`
  width: 100%;
  height: 220px;
  background-color: beige;
`

const Content = styled.div`
  padding: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 1.5rem;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      color: black;
      margin-left: 0.5rem;
    }
  }

  p {
    font-size: 1rem;
  }
`

const Card = (props) => {
  return (
    <Container>
      <Img src={props.img} alt='' />
      <Content>
        <div>
          <h1>{props.title}</h1>
          <a href='//www.instagram.com'>
            <FaGithub />
          </a>
        </div>
        <p>{props.subtitle}</p>
      </Content>
    </Container>
  )
}

export default Card
