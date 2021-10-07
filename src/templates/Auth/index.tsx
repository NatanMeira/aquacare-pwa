import * as S from './styles'
import Heading from 'components/Heading'

type AuthProps = {
  title?: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.Content>
      <Heading color="primary">{title}</Heading>
      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth
