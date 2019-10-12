import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import {
  Container,
  ImageProduct,
  TitleProduct,
  PriceProduct,
  AddButton,
  Product,
  AddProduct,
  Quantidade,
  TextAdicionar,
} from './styles';

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      //  priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          data={products}
          keyExtractor={item => String(item.id)}
          horizontal
          renderItem={({ item }) => (
            <Product key={item.id}>
              <ImageProduct source={{ uri: item.image }} />
              <TitleProduct>{item.title}</TitleProduct>
              <PriceProduct>{item.price}</PriceProduct>
              <AddButton>
                <AddProduct>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <Quantidade>1</Quantidade>
                </AddProduct>
                <TextAdicionar>ADICIONAR</TextAdicionar>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}
Main.navigationOptions = {
  title: 'Home',
};
