import styled, { css, DefaultTheme } from 'styled-components'

const WrapperModifiers = {
  withError: (theme: DefaultTheme) => css`
    > div {
      box-shadow: 0 0 0.5rem ${theme.colors.error};
    }
  `
}

export const Wrapper = styled.main<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    ${!!hasError && WrapperModifiers.withError(theme)};
  `}
`

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
