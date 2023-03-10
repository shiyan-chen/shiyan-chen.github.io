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
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  span {
    font-weight: 700;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  gap: 4rem;

  @media screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    margin-inline: 200px;
  }
`

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 450px;
    width: auto;
    object-fit: cover;
    border-radius: 15%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      height: 300px;
      box-shadow: 8px 8px 0px 0 var(--about-content);
    }

    @media screen and (min-width: 480px) and (hover: none) {
      box-shadow: 10px 10px 0px 0 var(--about-content);
    }

    @media screen and (min-width: 480px) and (hover: hover) {
      &:hover {
        box-shadow: 12px 12px 0px 0 var(--about-content);
      }
    }
  }
`

const Content = styled.div`
  width: 100%;

  a {
    text-decoration: underline;
  }
`

const About = () => {
  return (
    <Container id='about'>
      <Wrapper>
        <ImgWrap>
          <img src={Profile} alt='profile' />
        </ImgWrap>
        <Content>
          <h2># About Me</h2>
          <h1>Developer, Designer & Architect</h1>
          <p>
            Hello, I am a <span>full-stack software developer</span> currently
            pursuing a second <span>master’s degree in Computer Science</span>{' '}
            at <span>Northeastern University</span>. I earned my{' '}
            <span>bachelor's degree in Architecture</span> from{' '}
            <span>Huazhong University of Sci & Tech (China)</span> and my first{' '}
            <span>master's degree in Advanced Architectural Design</span> from{' '}
            <span>UC Berkeley</span>. As an architectural designer, programming
            helps me to expand the boundaries of my design, which led me to
            pursue a degree in Computer Science. As a full-stack developer,
            architectural background teaches me to think systematically and to
            design in detail.
          </p>
          <p>
            I have lots of practical experience in{' '}
            <span>web and mobile development</span>. I once developed a{' '}
            <span>low-latency twitter backend service</span> and a{' '}
            <span>full-stack e-commerce website</span>. I also worked with a
            team of three to develop a <span>mobile app, Unworried Store</span>,
            for recording and sharing users’ daily worries. I love what I’m
            doing, but now I’m ready for a more challenging assignment. I am
            looking for the opportunity to work with professional development
            teams to accomplish innovative and challenging projects. If you
            would like to offer me this opportunity, please check my{' '}
            <span>
              <a
                href='https://www.linkedin.com/in/shiyan-chen22/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
            </span>{' '}
            and feel free to{' '}
            <span>
              <a
                href='mailto:c.shiyan22@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                contact
              </a>
            </span>{' '}
            me.
          </p>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default About
