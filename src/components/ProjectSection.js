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
`

const Title = styled.h1`
  padding-bottom: 2rem;
  font-size: 2rem;
`

const Labels = styled.div`
  display: flex;
  justify-content: center;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProjectSection = () => {
  const cards = ProjectData.map((item) => {
    return <Card key={item.id} {...item} />
  })

  return (
    <Container>
      <Title>My Projects</Title>
      <Labels></Labels>
      <Cards>{cards}</Cards>
    </Container>
  )
}

export default ProjectSection
