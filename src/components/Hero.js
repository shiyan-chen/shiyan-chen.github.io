import React from 'react'
import styled from 'styled-components'
// import { motion } from 'framer-motion'
import PokeMe1 from '../assets/poke-me1.png'
import PokeMe2 from '../assets/poke-me2.png'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -999;
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
    -ms-transform: translate(-130%, -200%);
    transform: translate(-130%, -200%);
    z-index: 3;

    height: 140px;
    width: 150px;
    background-image: url(${PokeMe2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media screen and (max-width: 1200px) and (min-height: 1000px) {
    -ms-transform: translate(-130%, -200%);
    transform: translate(-130%, -200%);
  }

  @media screen and (max-width: 1200px) and (max-height: 700px) {
    height: 130px;
    -ms-transform: translate(-120%, -170%);
    transform: translate(-120%, -170%);
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

  div {
    overflow: hidden;
  }

  h1 {
    font-size: 5rem;
    font-family: var(--font-display);
    line-height: 0.9;
    color: var(--hero-content);
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    margin-bottom: 1rem;

    span {
      white-space: nowrap;
    }

    .space {
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 3rem;
    }
  }
`

// const banner = {
//   animate: {
//     transition: {
//       delayChildren: 0.4,
//       staggerChildren: 0.1,
//     },
//   },
// }

// const letterAni = {
//   initial: { y: 400 },
//   animate: {
//     y: 0,
//     transition: {
//       ease: [0.6, 0.01, 0.05, 0.95],
//       duration: 1,
//     },
//   },
// }

// const AnimatedLetters = ({ word, disabled }) => (
//   <motion.span
//     variants={disabled ? null : banner}
//     initial='initial'
//     animate='animate'
//   >
//     {[...word].map((letter, i) => (
//       <motion.span
//         style={{ display: 'inline-block' }}
//         key={i}
//         variants={disabled ? null : letterAni}
//       >
//         {letter}
//       </motion.span>
//     ))}
//   </motion.span>
// )

const Hero = () => {
  return (
    <Container id='hero'>
      <Poke />
      <Wrapper>
        <Space />
        <Content>
          {/* <div>
            <h1>
              <AnimatedLetters word='Hi,' />{' '}
              <span className='space'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <AnimatedLetters word="I'm" /> <AnimatedLetters word='Shiyan' />{' '}
              <AnimatedLetters word='Chen.' />
            </h1>
          </div> */}

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

export default Hero
