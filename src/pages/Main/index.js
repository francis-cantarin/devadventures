import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image, ImageBackground } from 'react-native';

import {
  Container,
  BtnContainer,
  Button,
  Avatar,
  Details,
  Status,
  StatusText,
  Points,
  Name,
} from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('Quests');
  };

  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../../assets/bg.jpg')}
      >
        <Container>
          <Name>
            <StatusText>Francis Cantarin</StatusText>
          </Name>
          <Avatar>
            <Image
              style={{ width: 120, height: 120, borderRadius: 60 }}
              source={require('../../assets/avatar.jpeg')}
            />
          </Avatar>
          <Details>Level: 1</Details>
          <Points>
            <StatusText>Pontos: 0</StatusText>
          </Points>
          <Status>
            <StatusText>For: 30</StatusText>
            <StatusText>Int: 50</StatusText>
          </Status>
          <Status>
            <StatusText>Sta: 70</StatusText>
            <StatusText>Sor: 45</StatusText>
          </Status>
          <BtnContainer>
            <Button onPress={this.handleNavigate}>
              <Icon name="explore" size={80} color="#fff" />
            </Button>
          </BtnContainer>
        </Container>
      </ImageBackground>
    );
  }
}

Main.navigationOptions = {
  title: 'Profile',
};
