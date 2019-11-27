import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  flex-direction: column;
  justify-content: flex-start;
`;

export const BtnContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
`;

export const Tesouro = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
`;

export const P = styled.Text`
  color: black;
  font-size: 25px;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: justify;
`;

export const Title = styled.Text`
  color: black;
  font-size: 25px;
  margin-bottom: 30px;
  font-weight: bold;
  align-self: center;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin: 10px;
`;
