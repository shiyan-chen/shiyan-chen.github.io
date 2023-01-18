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
  background-color: var(--project-bg);
  text-align: center;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 740px) {
    grid-template-columns: 1fr;
  }
`

const Projects = () => {
  const cards = ProjectData.map((item) => {
    return <Card key={item.id} {...item} />
  })

  return (
    <Container>
      <h2># Projects</h2>
      <h1>Things I'v Built</h1>
      <Cards>{cards}</Cards>
    </Container>
  )
}

export default Projects
