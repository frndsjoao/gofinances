import React from 'react'
import { Category, CategoryList, Container, Footer, Header, Icon, Name, Separator, Title } from './styles'
import { categories } from '../../utils/categories';
import Button from '../../components/Forms/Button';

interface Category {
  key: string;
  name: string;
  icon?: string;
  color?: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeCategory: () => void
}

export default function CategorySelectModal({ category, setCategory, closeCategory }: Props) {
  return (
    <Container>
      <Header>
        <Title>Selecione uma categoria:</Title>
      </Header>

      <CategoryList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => setCategory(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button
          title='Selecionar'
          onPress={closeCategory}
        />
      </Footer>
    </Container>
  )
}