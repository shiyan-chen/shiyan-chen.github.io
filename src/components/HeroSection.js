import React from 'react'
import styled from 'styled-components'
import PokeMe1 from '../assets/poke-me1.png'
import PokeMe2 from '../assets/poke-me2.png'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -2;
`

const Poke = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-10rem, -15rem);
  transform: translate(-10rem, -15rem);
  z-index: 3;

  height: 120px;
  width: 200px;
  background-image: url(${PokeMe1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 1200px) {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-100%, -230%);
    transform: translate(-100%, -230%);
    z-index: 3;

    height: 120px;
    width: 200px;
    background-image: url(${PokeMe2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media screen and (min-height: 1000px) {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-100%, -300%);
    transform: translate(-100%, -300%);
    z-index: 3;

    height: 120px;
    width: 200px;
    background-image: url(${PokeMe2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 24px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

const Space = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1200px) {
    display: flex;
  }
`

const Content = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  flex-direction: column;
  cursor: default;

  h1 {
    font-size: 5rem;
    font-family: var(--font-display);
    line-height: 0.9;
    color: var(--hero-content);
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    span {
      white-space: nowrap;
    }

    .space {
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    @media screen and (max-width: 480px) {
      font-size: 4rem;
    }
  }
`

const HeroSection = () => {
  return (
    <Container>
      <Poke />
      <Wrapper>
        <Space />
        <Content>
          <h1>
            Hi,{' '}
            <span className='space'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            I'm <span>Shiyan Chen.</span>
          </h1>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default HeroSection
