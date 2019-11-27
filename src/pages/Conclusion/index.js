import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image, ImageBackground } from 'react-native';

import { Container, BtnContainer, Button, P, Tesouro, Title } from './styles';

export default class StoryTelling extends Component {
  static navigationOptions = {
    title: 'Conclusão',
  };

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../../assets/bg2.jpg')}
      >
        <Container>
          <Title>Parabéns DEV!</Title>
          <Tesouro>
            <Image
              style={{ width: 120, height: 120 }}
              source={require('../../assets/tesouro.png')}
            />
          </Tesouro>
          <P>
            Você deu o seu primeiro passo na sua jornada pelo mundo da
            programação, persista e continue em frente, a aventura está apenas
            começando.
          </P>
          <P>Boa Sorte!</P>
          <BtnContainer>
            <Button onPress={this.handleNavigate}>
              <Icon name="arrow-forward" size={60} color="#000" />
            </Button>
          </BtnContainer>
        </Container>
      </ImageBackground>
    );
  }
}

StoryTelling.navigationOptions = {
  title: 'Conclusão',
};
