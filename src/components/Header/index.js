import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../services/navigation';

import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  ButtonHome,
} from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <ButtonHome onPress={() => NavigationService.navigate('Main')}>
          <Logo />
        </ButtonHome>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
