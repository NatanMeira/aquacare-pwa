import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  background: white;
  padding: 2rem 3rem;
  border-radius: 1rem;
  width: 50rem;
`
