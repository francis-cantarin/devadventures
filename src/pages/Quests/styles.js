import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  color: white;
  align-self: center;
  font-size: 20px;
  font-weight: bold;
`;

export const BtnContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  border-top-width: 1px;
  border-color: #5b5958;
  margin-bottom: 25px;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background: #ccc;
  border-radius: 35px;
  margin-top: 25px;
  padding: 0 12px;
`;

export const BtnContainer1 = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 25px;
`;

export const Button1 = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background: #0145ac;
  border-radius: 35px;
  margin-top: 25px;
  padding: 0 12px;
`;
