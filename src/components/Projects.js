import React from 'react'
import styled from 'styled-components'

import Card from './Card'
import ProjectData from '../data/ProjectData'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 100px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--highlight);

  @media screen and (max-width: 480px) {
    margin-bottom: 2rem;
    font-size: 1.3rem;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1em;
  line-height: 0.9;
  color: var(--highlight);

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

const Projects = () => {
  const cards = ProjectData.map((item) => {
    return <Card key={item.id} {...item} />
  })

  return (
    <Container>
      <Subtitle>/ Projects</Subtitle>
      <Title>Some Things I'v Built</Title>
      <Cards>{cards}</Cards>
    </Container>
  )
}

export default Projects
