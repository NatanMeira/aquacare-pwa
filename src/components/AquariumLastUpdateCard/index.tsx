import Heading from 'components/Heading'
import * as S from './styles'
import { format } from 'date-fns'
import Chip from '../Chip'

export type AquariumLastUpdateCardProps = {
  name: string
  liters: number
  updateAt: Date
  status: string
  isHabitable: boolean
}

const AquariumLastUpdateCard = ({
  name,
  updateAt,
  status,
  isHabitable,
  liters
}: AquariumLastUpdateCardProps) => (
  <S.Wrapper>
    <Heading underline={true} color="primary">
      ULTIMA ATUALIZAÇÃO
    </Heading>
    <S.Main>
      <S.AquariumImg src="/img/logo-outlined.svg" alt="aquário" />
      <S.AquariumInfo>
        <S.Info>{name}</S.Info>
        <S.Info>{liters} Litros</S.Info>
        <S.Info>{format(new Date(updateAt), 'HH:mm - dd/MM/yyyy')}</S.Info>
        <Chip
          label={status === 'safe/alert' ? 'SEGURO' : 'PERIGOSO'}
          color={status === 'safe/alert' ? 'alarm' : 'toxic'}
        />
      </S.AquariumInfo>
    </S.Main>
    <S.Habitable bgColor={isHabitable ? 'success' : 'error'}>
      {isHabitable ? 'HABITÁVEL' : 'INABITÁVEL'}
    </S.Habitable>
  </S.Wrapper>
)

export default AquariumLastUpdateCard
