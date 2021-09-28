import styled, { css, DefaultTheme } from 'styled-components'

import { HeadingProps } from '.'

const wrapperModifiers = {
  underline: () => css`
    text-decoration: underline;
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, underline, size }) => css`
    color: ${theme.colors[color!]};

    ${underline && wrapperModifiers.underline()}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
