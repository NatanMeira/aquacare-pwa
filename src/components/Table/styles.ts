import styled, { css } from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const THead = styled.thead`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBg};
  `}
`

export const TH = styled.th`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBg};
    padding: 0.8rem 1rem;
    text-align: left;
    color: white;
    border: 1px solid #ddd;
  `}
`

export const TD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`

export const TR = styled.tr`
  :nth-child(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background-color: #ddd;
  }
`
