import React from 'react'
import { Button, Container, Icon, Title } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string;
  type: 'up' | 'down'
  isActive: boolean
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
}

export default function TransactionTypeButton({ title, type, isActive, ...rest }: Props) {
  return (
    <Container isActive={isActive} type={type}>
      <Button {...rest}>
        <Icon name={icons[type]} type={type} />
        <Title isActive={isActive}>{title}</Title>
      </Button>
    </Container>
  )
}