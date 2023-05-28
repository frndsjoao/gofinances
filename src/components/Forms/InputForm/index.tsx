import { TextInputProps } from 'react-native'
import React from 'react'
import { Container, Error } from './styles'
import Input from '../Input'
import { Control, Controller } from 'react-hook-form'

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}

export default function InputForm({ control, name, error, placeholder, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            {...rest}
          />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}