import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'primary'
  underline?: boolean
}

const Heading = ({
  children,
  color = 'white',
  underline = false
}: HeadingProps) => (
  <S.Wrapper color={color} underline={underline}>
    {children}
  </S.Wrapper>
)

export default Heading
