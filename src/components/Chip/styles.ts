import styled, { css } from 'styled-components'
import { ChipProps } from '.'
import { darken } from 'polished'

const wrapperModifiers = {
  fullWidth: () => css`
    display: block;
    width: 100%;
  `
}

export const Wrapper = styled.span<Omit<ChipProps, 'label'>>`
  ${({ theme, color, fullWidth }) => css`
    background-color: ${theme.colors[color!]};
    padding: 0.3rem 3rem;
    border-radius: 3rem;
    font-weight: bold;
    border: 1px solid ${darken(0.5, theme.colors[color!])};
    text-align: center;

    ${!!fullWidth && wrapperModifiers.fullWidth()};
  `}
`
