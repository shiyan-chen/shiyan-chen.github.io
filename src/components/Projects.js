import React, { useState } from 'react'
import styled from 'styled-components'

import Card from './Card'
import ProjectData from '../data/ProjectData'
import { Button } from './Button'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 100px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--project-bg);
  text-align: center;

  h1 {
    margin-inline: 100px;
  }

  @media screen and (max-width: 480px) {
    text-align: left;

    h2 {
      width: 100%;
      width: 300px;
    }

    h1 {
      margin-inline: 0px;
      width: 300px;
    }
  }
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: min-content 1fr;
  grid-gap: 20px;
  margin-bottom: 40px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 740px) {
    grid-template-columns: 1fr;
  }
`

const Projects = () => {
  const [showMore, setShowMore] = useState(false)
  const toggle = () => {
    setShowMore((prev) => !prev)
  }

  const GRID_LIMIT = 6
  const cards = ProjectData.map((item) => {
    return <Card key={item.id} {...item} />
  })
  const firstSix = cards.slice(0, GRID_LIMIT)

  return (
    <Container id='projects'>
      <h2># Projects</h2>
      <h1>Frontend, Backend & Fullstack</h1>
      <Cards>{showMore ? cards : firstSix}</Cards>
      <Button onClick={toggle}>
        <span>{showMore ? 'Show Less' : 'Show More'}</span>
      </Button>
    </Container>
  )
}

export default Projects
