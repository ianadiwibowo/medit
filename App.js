import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

class GreetingPupuru extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}, the {this.props.class}</Text>
    );
  }
}

class BlinkPupuru extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>Hello world Pupuru Moshi-moshi! Molapiyo ... There was once a lonely wolf that is hunting alone in the deep dark forest.</Text>
        <Image source={pic} style={{width: 193, height: 110}} />
        <GreetingPupuru name='Jon Snow' class='Night Watch Ranger' />
        <BlinkPupuru text='Holapiyo mola-molapiyo' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
