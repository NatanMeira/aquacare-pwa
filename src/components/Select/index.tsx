import * as S from './styles'
import Select from 'react-select'
import { SelectHTMLAttributes } from 'react'

export type SelectOption = { value: string; label: string }

export type SelectFieldProps = {
  options: SelectOption[] | any[]
  label?: string
  error?: string
  onInputChange?: (value: string) => void
  isLoading: boolean
} & SelectHTMLAttributes<HTMLSelectElement>

const SelectField = ({
  options,
  label,
  error,
  name,
  placeholder,
  value,
  isLoading = false,
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
        value={value}
        name={name}
        id={name}
        onChange={handleOnChange}
        noOptionsMessage={() => 'Nenhuma opção para ser selecionada!'}
        placeholder={placeholder}
        isLoading={isLoading}
        defaultValue={((value = '2'), (label = 'string'))}
      />
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default SelectField
