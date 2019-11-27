import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground, Alert } from 'react-native';

import { Container, BtnContainer, Button, P, Input } from './styles';

export default class Challenge extends Component {
  static navigationOptions = {
    title: 'Desafio',
  };

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    text: '',
  };

  handleNavigate = () => {
    const { navigation } = this.props;
    const { text } = this.state;

    if (text === '#7159c1') {
      navigation.navigate('Conclusion');
    } else {
      Alert.alert(
        'Errooou!!!',
        'Estou me sentindo generoso hoje DEV, tente novamente.'
      );
    }
  };

  render() {
    const { text } = this.state;
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../../assets/bg2.jpg')}
      >
        <Container>
          <P>Qual é o hexadecimal da cor tema da Rocketseat Corp?</P>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Errou tá fora!!!"
            value={text}
            onChangeText={value => this.setState({ text: value })}
            returnKeyType="send"
            onSubmitEditing={this.handleNavigate}
          />
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

Challenge.navigationOptions = {
  title: 'Desafio',
};
