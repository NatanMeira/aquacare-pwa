import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Table = styled.table`
  ${({ theme }) => css`
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
  `}
`

export const THead = styled.thead`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBg};
  `}
`

export const TH = styled.th`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBg};
    padding: 0.5rem 1rem;
    text-align: left;
    color: white;
    border: 1px solid #000;
  `}
`

export const TD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`

export const TR = styled.tr`
  background-color: #fff;
  :nth-child(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background-color: #ddd;
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${darken(0.1, theme.colors.darkBg)};
    border-radius: 2rem;
    padding-bottom: 1.5rem;

    > H2 {
      text-align: center;
      padding: 0.3rem 0;
    }

    a:last-child {
      background: ${darken(0.1, theme.colors.darkBg)};
      height: 3rem;
    }
  `}
`

export const TableWrapper = styled.div`
  ${({ theme }) => css`
    min-height: 20rem;
    background: #e3e3e3;
    border-left: 2px solid ${darken(0.1, theme.colors.darkBg)};
    border-right: 2px solid ${darken(0.1, theme.colors.darkBg)};
  `}
`
