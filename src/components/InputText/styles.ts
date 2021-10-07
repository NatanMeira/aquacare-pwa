import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div``

const InputWrapperModifiers = {
  withError: (theme: DefaultTheme) => css`
    box-shadow: 0 0 0.5rem ${theme.colors.error};
    ${Icon} {
      color: ${theme.colors.error};
    }
  `
}

export const InputWrapper = styled.div<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-radius: 0.8rem;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${!!hasError && InputWrapperModifiers.withError(theme)};
  `}
`

const InputModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
  `
}

export const Input = styled.input<{ hasIcon: boolean }>`
  ${({ theme, hasIcon }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray} inset;
      filter: none;
      &::first-line {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      }
    }
    ${!!hasIcon && InputModifiers.withIcon(theme)};
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

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.primary};
    & > svg {
      width: 2.2rem;
      height: 100%;
    }
  `}
`
