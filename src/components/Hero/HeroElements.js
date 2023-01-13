import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  h2 {
    font-size: 3rem;
  }

  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 2rem;
  }
`

export const Avatar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  img {
    width: 400px;
  }
`
