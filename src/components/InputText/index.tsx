import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type InputTextProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const InputText = ({
  label,
  error,
  name,
  icon,
  onInputChange,
  initialValue,
  ...props
}: InputTextProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper hasError={!!error}>
        {icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
          hasIcon={!!icon}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default InputText
