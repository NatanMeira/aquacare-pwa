import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.main``

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
    border-left: 3px solid ${theme.colors.primary};
    padding-left: 1rem;
    margin-bottom: 1rem;
    display: block;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
    border-bottom: 3px solid ${theme.colors.error};
    margin-top: 1rem;
  `}
`

const SelectModifiers = {
  withError: (theme: DefaultTheme) => css`
    box-shadow: 0 0 0.5rem ${theme.colors.error};
  `
}

export const Select = styled.select<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    background: ${theme.colors.lightGray};
    width: 100%;
    padding: 1rem;
    border-radius: 0.8rem;
    border: 0;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    outline: 0;

    ${!!hasError && SelectModifiers.withError(theme)};
  `}
`
export const Option = styled.option``
