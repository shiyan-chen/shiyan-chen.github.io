import React from 'react'
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import styled from 'styled-components'
// import { Link } from 'react-router-dom'

const Container = styled.footer`
  background-color: var(--footer-bg);
  color: var(--footer-content);
`

const Wrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

const SocialLogo = styled.a`
  text-decoration: none;
  justify-self: start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-family: var(--font-display);
`

const WebsiteRights = styled.small`
  margin-bottom: 16px;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

const SocialIconLink = styled.a`
  font-size: 24px;
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo href='#hero'>Shiyan</SocialLogo>
            <WebsiteRights>
              Shiyan Chen &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://github.com/shiyan-chen'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Github'
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.instagram.com/shiyan_1097/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.youtube.com/@shiyanchen7285'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/shiyan-chen22/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href='mailto:c.shiyan22@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Gmail'
              >
                <SiGmail />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </Wrapper>
    </Container>
  )
}

export default Footer
