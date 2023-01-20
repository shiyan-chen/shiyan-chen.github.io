import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 0;
  background-color: var(--card-overlay-bg);
  opacity: 0.95;
  transition: all 0.3s ease-in-out;
  z-index: 2;

  div {
    color: var(--card-overlay-content);
    opacity: 0;
    height: 0;
    transition: all 0.3s ease-in-out;
    margin-right: auto;

    h3 {
      padding-top: 2rem;
      padding-inline: 2rem;
      text-align: left;
    }

    p {
      padding-inline: 2rem;
      padding-bottom: 2rem;
      text-align: left;
    }
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
  border-radius: 10px;
  background-color: var(--card-bg);
  box-shadow: 4px 4px 0px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  &:hover ${Overlay} {
    height: 74%;

    div {
      opacity: 1;
      height: 100%;
    }
  }
`

const Wrapper = styled.div`
  padding: 10px;
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
`

const Content = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h3`
  font-size: 1rem;
  color: var(--card-content);
`

const Links = styled.div`
  margin-top: 5px;
  font-size: 1rem;

  a {
    text-decoration: underline;

    @media screen and (hover: hover) {
      &:hover {
        color: var(--card-accent);
      }
    }
  }
`

const Card = (props) => {
  return (
    <Container>
      <Overlay>
        <div>
          <h3>Technologies</h3>
          <p>{props.technologies}</p>
        </div>
      </Overlay>
      <Wrapper>
        <Img src={props.img} alt='' />
        <Content>
          <Title>{props.title}</Title>
          <Links>
            {props.code && (
              <a href={props.code} target='_blank' rel='noopener noreferrer'>
                code
              </a>
            )}{' '}
            {props.code && props.demo && '|'}{' '}
            {props.demo && (
              <a href={props.demo} target='_blank' rel='noopener noreferrer'>
                demo
              </a>
            )}
          </Links>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Card
