import * as S from './styles'
import Menu from 'components/Menu'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Menu />
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default Base
