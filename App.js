import React, { Component } from 'react';
import { Alert, AppRegistry, Button, Image, Platform, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

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
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  constructor(props) {
    super(props);
    this.state = {text: ''};
  };

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback onPress={this._onPressButton} background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <Button
          onPress={() => { Alert.alert('You tapped the button!') }}
          title="Press me"
          color="powderblue"
        />
        <TextInput style={{height: 40}} placeholder='Type here to translate!' onChangeText={(text) => this.setState({text})}></TextInput>
        <Text style={{padding: 10, fontSize: 20}}>{this.state.text + ' pupuru'}</Text>
        <Text>Hello world Pupuru Moshi-moshi! Molapiyo ... There was once a lonely wolf that is hunting alone in the deep dark forest.</Text>
        <Image source={pic} style={{width: 193, height: 110}} />
        <GreetingPupuru name='Jon Snow' class='Night Watch Ranger' />
        <BlinkPupuru text='Holapiyo mola-molapiyo' />
        <Text style={styles.red}>Just Red</Text>
        <Text style={styles.bigblue}>Just Big Blue</Text>
        <Text style={[styles.bigblue, styles.red]}>Big Blue, then Red</Text>
        <Text style={[styles.red, styles.bigblue]}>Red, then Big Blue</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 1, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  },
  button: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
