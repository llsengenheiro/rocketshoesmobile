import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;
export const CartArea = styled.View`
  padding: 10px;
  margin: 15px;
  border-radius: 8px;
  background: #fff;
`;
export const Products = styled.View`
  background: #fff;
`;
export const Product = styled.View``;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;
export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductData = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProductSub = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductQtd = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const Subtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const ContainerTotal = styled.View`
  margin-top: 30px;
`;
export const TextTotal = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;
export const TextValor = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;

export const ButtonDone = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 5px;
  padding: 12px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
export const ProductIncDec = styled.TouchableOpacity``;
export const ProductDelete = styled.TouchableOpacity``;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
