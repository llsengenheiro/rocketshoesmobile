import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import {
  Container,
  ViewArea,
  ImageProduct,
  TitleProduct,
  PriceProduct,
  AddButton,
  Product,
  AddProduct,
  Quantidade,
  TextAdicionar,
} from './styles';

class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <ViewArea>
          <FlatList
            data={products}
            extraData={this.props}
            keyExtractor={item => String(item.id)}
            horizontal
            renderItem={({ item }) => (
              <Product key={item.id}>
                <ImageProduct source={{ uri: item.image }} />
                <TitleProduct>{item.title}</TitleProduct>
                <PriceProduct>{item.priceFormatted}</PriceProduct>
                <AddButton onPress={() => this.handleAddProduct(item.id)}>
                  <AddProduct>
                    <Icon name="add-shopping-cart" color="#FFF" size={20} />
                    <Quantidade>{amount[item.id] || 0}</Quantidade>
                  </AddProduct>
                  <TextAdicionar>ADICIONAR</TextAdicionar>
                </AddButton>
              </Product>
            )}
          />
        </ViewArea>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
