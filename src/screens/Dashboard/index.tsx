import React from 'react'
import { Container, Header, UserInfo, Photo, User, UserGreeting, UserName, UserContainer, Icon, HighlightCards, Transactions, Title, TransactionList, LogoutButton } from './styles'
import HighlightCard from '../../components/HighlightCard'
import TransactionCard, { TransactionCardProps } from '../../components/TransactionCard'

export interface DataListProps extends TransactionCardProps {
  id: number
}

export default function Dashboard() {
  const data: DataListProps[] = [{
    id: 1,
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$2.000,00',
    date: '20/05/2023',
    category: { name: 'Vendas', icon: 'dollar-sign' }
  },
  {
    id: 2,
    type: 'negative',
    title: 'Parcela do apartamento',
    amount: 'R$1.693,00',
    date: '20/05/2023',
    category: { name: 'Casa', icon: 'home' }
  },
  {
    id: 3,
    type: 'positive',
    title: 'Salário',
    amount: 'R$3.593,00',
    date: '20/05/2023',
    category: { name: 'Salário', icon: 'dollar-sign' }
  }]

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo source={{ uri: "https://avatars.githubusercontent.com/u/54087828?v=4" }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>João!</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => { }}>
            <Icon name='power' />
          </LogoutButton>
        </UserContainer>
      </Header>

      <HighlightCards>
        <HighlightCard
          type='total'
          title='Total'
          amount='R$1.022,00'
        />
        <HighlightCard
          type='up'
          title='Entradas'
          amount='R$1.022,00'
          lastTransaction='Última transação em 16 de abril de 2023'
        />
        <HighlightCard
          type='down'
          title='Saídas'
          amount='R$1.022,00'
          lastTransaction='Última transação em 16 de abril de 2023'
        />
      </HighlightCards>

      <Transactions>
        <Title>Lançamentos</Title>

        <TransactionList
          data={data}
          renderItem={({ item }: any) => <TransactionCard data={item} />}
        />
      </Transactions>

    </Container>
  )
}