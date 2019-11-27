import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground } from 'react-native';

import {
  Container,
  BtnContainer,
  Button,
  BtnContainer1,
  Button1,
  Title,
} from './styles';

export default class Quests extends Component {
  static navigationOptions = {
    title: 'Quests',
  };

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('StoryTelling');
  };

  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../../assets/bg1.jpg')}
      >
        <Container>
          <Title>Introdução</Title>
          <BtnContainer1>
            <Button1 onPress={this.handleNavigate}>
              <Icon name="home" size={40} color="#FFF" />
            </Button1>
          </BtnContainer1>

          <BtnContainer>
            <Button>
              <Icon name="lock" size={20} color="#5b5958" />
            </Button>
            <Button>
              <Icon name="lock" size={20} color="#5b5958" />
            </Button>
          </BtnContainer>
          <BtnContainer>
            <Button>
              <Icon name="lock" size={20} color="#5b5958" />
            </Button>
            <Button>
              <Icon name="lock" size={20} color="#5b5958" />
            </Button>
          </BtnContainer>
          <BtnContainer>
            <Button>
              <Icon name="lock" size={20} color="#5b5958" />
            </Button>
          </BtnContainer>
        </Container>
      </ImageBackground>
    );
  }
}

Quests.navigationOptions = {
  title: 'Quests',
};
