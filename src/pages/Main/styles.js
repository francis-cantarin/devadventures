import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const BtnContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
`;

export const Avatar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.Text`
  color: white;
  margin: 70px;
  font-size: 30px;
  font-weight: bold;
`;

export const Points = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: #ccc;
  margin-bottom: 10px;
`;

export const Status = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Name = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

export const StatusText = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
