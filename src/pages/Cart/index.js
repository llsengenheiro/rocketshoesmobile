import React from 'react';

import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  Container,
  CartArea,
  Products,
  Product,
  ProductImage,
  ProductDetails,
  ProductDelete,
  ProductData,
  ProductTitle,
  ProductPrice,
  ProductSub,
  ProductIncDec,
  ProductQtd,
  Subtotal,
  ContainerTotal,
  TextTotal,
  TextValor,
  ButtonDone,
  ButtonText,
  EmptyText,
  EmptyContainer,
} from './styles';

function Cart({
  products,
  total,
  removeFromCart,
  updateAmountRequest,
  formatPrice,
}) {
  function incrmentAmount(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }
  function decrementAmount(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <CartArea>
        {products.length ? (
          <>
            <Products>
              {products.map(product => (
                <Product key={product.id}>
                  <ProductData>
                    <ProductImage
                      source={{
                        uri: product.image,
                      }}
                    />
                    <ProductDetails>
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductPrice>{product.formatPrice}</ProductPrice>
                    </ProductDetails>
                    <ProductDelete onPress={() => removeFromCart(product.id)}>
                      <Icon name="delete" size={25} color="#7159c1" />
                    </ProductDelete>
                  </ProductData>
                  <ProductSub>
                    <ProductIncDec onPress={() => decrementAmount(product)}>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#7559c1"
                      />
                    </ProductIncDec>
                    <ProductQtd>{product.amount}</ProductQtd>
                    <ProductIncDec onPress={() => incrmentAmount(product)}>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#7559c1"
                      />
                    </ProductIncDec>
                    <Subtotal>{product.subtotal}</Subtotal>
                  </ProductSub>
                </Product>
              ))}
            </Products>

            <ContainerTotal>
              <TextTotal>TOTAL</TextTotal>
              <TextValor>{total}</TextValor>
              <ButtonDone>
                <ButtonText>FINALIZAR PEDIDO</ButtonText>
              </ButtonDone>
            </ContainerTotal>
          </>
        ) : (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        )}
      </CartArea>
    </Container>
  );
}
const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
    formatPrice: formatPrice(product.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
