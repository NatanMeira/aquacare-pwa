import * as S from './styles'

export type ChipProps = {
  label: string
  color?: 'alarm' | 'toxic'
  fullWidth?: boolean
}

const Chip = ({ label, color = 'alarm', fullWidth = false }: ChipProps) => (
  <S.Wrapper color={color} fullWidth={fullWidth}>
    {label}
  </S.Wrapper>
)

export default Chip
