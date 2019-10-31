import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { RNToasty } from 'react-native-toasty';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import NavigationService from '../../../services/navigation';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExist = yield select(state => state.cart.find(p => p.id === id));

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  const currentStock = productExist ? productExist.amount : 0;

  const amount = currentStock + 1;

  if (amount > stockAmount) {
    RNToasty.Warn({
      title: 'Quntidade solicitada não disponível',
    });
    console.tron.warn('erro');
    return;
  }

  if (productExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data),
    };

    yield put(addToCartSuccess(data));
    NavigationService.navigate('Cart');
  }
}

function* updadeAmount({ id, amount }) {
  if (amount <= 0) return;
  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    RNToasty.Warn({
      title: 'Quantidade solicitada indisponível',
    });
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updadeAmount),
]);
