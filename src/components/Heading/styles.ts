import styled, { css } from 'styled-components'

import { HeadingProps } from '.'

const wrapperModifiers = {
  underline: () => css`
    text-decoration: underline;
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, underline }) => css`
    color: ${theme.colors.primary};

    ${underline && wrapperModifiers.underline()}
  `}
`
