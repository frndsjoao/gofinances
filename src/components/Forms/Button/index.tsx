import React from 'react'
import { Container, Title } from './styles'
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler'

interface Props extends RectButtonProps {
  title: string
  onPress: () => void
}

export default function Button({ title, onPress, ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}