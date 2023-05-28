import React, { useState } from 'react'
import { Alert, Keyboard, Modal } from 'react-native'
import { Container, Fields, Header, Title, Form, TransactionWrapper } from './styles'
import Button from '../../components/Forms/Button'
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton'
import CategorySelectButton from '../../components/Forms/CategorySelectButton'
import CategorySelectModal from '../CategorySelectModal'
import InputForm from '../../components/Forms/InputForm'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler'

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number().typeError('Informe um valor numérico').positive('O valor não pode ser negativo').required('Valor é obrigatório')
})

export default function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  function handleSelectTransactionType(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleRegister(form: any) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo de transação')
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria')
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log(data)
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      containerStyle={{ flex: 1 }}
      style={{ flex: 1 }}
    >
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              control={control}
              name="name"
              placeholder='Nome'
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              control={control}
              name="amount"
              placeholder='Preço'
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
            />

            <TransactionWrapper>
              <TransactionTypeButton
                title='Entradas'
                type="up"
                onPress={() => handleSelectTransactionType('up')}
                isActive={transactionType === 'up'}
              />
              <TransactionTypeButton
                title='Saídas'
                type="down"
                onPress={() => handleSelectTransactionType('down')}
                isActive={transactionType === 'down'}
              />
            </TransactionWrapper>

            <CategorySelectButton
              title={category.name}
              onPress={() => setCategoryModalOpen(true)}
            />
          </Fields>

          <Button
            title='Enviar'
            onPress={handleSubmit((form) => handleRegister(form))}
          />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelectModal
            category={category}
            setCategory={setCategory}
            closeCategory={() => setCategoryModalOpen(false)}
          />
        </Modal>

      </Container>
    </TouchableWithoutFeedback>
  )
}