import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'primary'
  underline?: boolean
  size?: 'small' | 'medium' | 'large'
}

const Heading = ({
  children,
  color = 'white',
  underline = false,
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper color={color} underline={underline} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
