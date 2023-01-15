import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 0;
  background-color: var(--card-overlay-bg);
  color: var(--card-overlay-content);
  transition: all 0.3s ease-in-out;
  z-index: 2;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    height: 0;
    margin: 2rem;
    text-align: left;
    transition: all 0.3s ease-in-out;
  }
`
const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 300px;
  height: 300px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0px;
  background-color: var(--card-bg);
  box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover ${Overlay} {
    height: 100%;

    div {
      opacity: 1;
      height: 100%;
      vertical-align: center;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Img = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
  background-color: var(--card-img-bg);
`

const Content = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.3rem;
    color: var(--card-title);
  }
`

const Card = (props) => {
  return (
    <Container>
      <Overlay>
        <div>{props.subtitle}</div>
      </Overlay>
      <Wrapper>
        <Img src={props.img} alt='' />
        <Content>
          <h1>{props.title}</h1>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Card
