import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightBg};
    border-radius: 1.5rem;
    text-align: center;
  `}
`
export const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`
export const AquariumInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
`
export const Info = styled.span`
  ${({ theme }) => css`
    display: block;
    font-weight: bold;
    color: ${theme.colors.primary};
    text-transform: uppercase;
    line-height: 2rem;
  `}
`
export const Habitable = styled.footer<{ bgColor: 'success' | 'error' }>`
  ${({ theme, bgColor }) => css`
    background: ${theme.colors[bgColor!]};
    border-radius: 0 0 1rem 1rem;
    margin-top: 1rem;
  `}
`
export const AquariumImg = styled.img`
  width: 120px;
  margin-right: 2rem;
`
