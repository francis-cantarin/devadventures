import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground } from 'react-native';

import { Container, BtnContainer, Button, P } from './styles';

export default class StoryTelling extends Component {
  static navigationOptions = {
    title: 'Introdução',
  };

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('Challenge');
  };

  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../../assets/bg2.jpg')}
      >
        <Container>
          <P>
            No ano de 2019 a lendária Rocketseat Corp reuniu, na famosa RSXP, um
            grupo de DEVS de elite de todo o país para resolver o problema da
            escassez de DEVS. Lá um grupo de 4 DEVS criaram a Dev Adventures.
          </P>
          <P>
            Parabéns por ter chegado até aqui recruta, só mais um último teste e
            você se juntará a nós.
          </P>
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
  title: 'Introdução',
};
