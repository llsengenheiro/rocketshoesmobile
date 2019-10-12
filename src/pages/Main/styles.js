import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #191920;
  padding-top: 48;
`;

export const Product = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 15px;
  width: 220px;
`;

export const ImageProduct = styled.Image`
  width: 200;
  height: 200;
`;

export const TitleProduct = styled.Text`
  font-size: 16;
`;
export const PriceProduct = styled.Text`
  margin: 14px 0px;
  font-size: 21;
  font-weight: bold;
  margin-bottom: 14px;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  margin-top: auto;
  align-items: center;
  flex-direction: row;
`;

export const AddProduct = styled.View`
  padding: 12px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  flex-direction: row;
  background: ${darken(0.03, '#7159c1')};
  align-items: center;
`;

export const Quantidade = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
export const TextAdicionar = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  flex: 1;
`;
