import * as S from './styles'
import Select from 'react-select'
import { SelectHTMLAttributes } from 'react'

type SelectOption = { value: string; label: string }

export type SelectFieldProps = {
  options: SelectOption[] | any[]
  label?: string
  error?: string
  onInputChange?: (value: string) => void
} & SelectHTMLAttributes<HTMLSelectElement>

const SelectField = ({
  options,
  label,
  error,
  name,
  onChange,
  onInputChange
}: SelectFieldProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value
    !!onInputChange && onInputChange(newValue)
    !!onChange && onChange(e)
  }

  return (
    <S.Wrapper hasError={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <Select
        options={options}
        name={name}
        id={name}
        onChange={handleOnChange}
      />
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default SelectField
