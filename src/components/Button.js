import styled from 'styled-components'

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
  height: 40px;
  border: 1px solid var(--black);
  color: var(--black);
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    width: 0px;
    height: 0px;
    background-color: var(--orange);
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }

  a,
  span {
    z-index: 3;
  }

  @media screen and (hover: hover) {
    &:hover {
      border: 1px solid var(--orange);
      color: var(--white);
    }

    &:hover::before {
      width: 160px;
      height: 160px;
    }
  }
`
