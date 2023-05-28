import { Feather } from '@expo/vector-icons';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { css } from 'styled-components';
import styled from 'styled-components/native';

interface TransactionProps {
  type?: 'up' | 'down';
  isActive: boolean;
}

export const Container = styled.View<TransactionProps>`
  ${({ isActive, type }) =>
    type === 'up' &&
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `}
  ${({ isActive, type }) =>
    type === 'down' &&
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}
  width: 48%;
  border: 1px solid
    ${({ theme, isActive }) => (isActive ? 'transparent' : theme.colors.text)};
  border-radius: 5px;
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Icon = styled(Feather)<TransactionProps>`
  font-size: ${RFValue(20)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled(Text)<TransactionProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.shape : theme.colors.title};
`;
