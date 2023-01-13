import React from 'react'
import { Container, Content, Avatar } from './HeroElements'
import NotionAvatar from '../../assets/notion-avatar.svg'

const Hero = () => {
  return (
    <Container>
      <Avatar>
        <img src={NotionAvatar} alt='notion avatar' />
      </Avatar>
      <Content>
        <h2>Hi, I'm</h2>
        <h1>Shiyan Chen.</h1>
        <p>I'm a full-stack software developer & designer from San Jose, CA.</p>
      </Content>
    </Container>
  )
}

export default Hero
