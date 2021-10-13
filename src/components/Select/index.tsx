import * as S from './styles'
import { SelectHTMLAttributes } from 'react'

export type SelectOption = { value: string; label: string }

export type SelectFieldProps = {
  options: SelectOption[]
  label?: string
  error?: string
  onInputChange?: (value: string) => void
} & SelectHTMLAttributes<HTMLSelectElement>

const SelectField = ({
  options,
  label,
  error,
  name,
  value,
  onInputChange,
  ...props
}: SelectFieldProps) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value
    !!onInputChange && onInputChange(newValue)
    !!props.onChange && props.onChange(e)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Select
        onChange={onChange}
        name={name}
        id={name}
        defaultValue=""
        hasError={!!error}
        {...props}
      >
        <S.Option value="" disabled>
          Selecionar
        </S.Option>
        {options?.map((option) => (
          <S.Option key={option.value} value={option.value}>
            {option.label}
          </S.Option>
        ))}
      </S.Select>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default SelectField
