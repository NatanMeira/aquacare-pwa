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
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    !!onInputChange && onInputChange(newValue)
    !!props.onChange && props.onChange(e)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper hasError={!!error}>
        {icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
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
