import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 1, name: 'Senja'},
            {key: 2, name: 'Reston'},
            {key: 3, name: 'Eddy'},
            {key: 4, name: 'Aldi'},
            {key: 5, name: 'Alfi'},
            {key: 6, name: 'Budi'},
            {key: 7, name: 'Ridwan'},
            {key: 8, name: 'Rizqi'},
            {key: 9, name: 'Ifa'},
            {key: 10, name: 'Aya'},
            {key: 11, name: 'Ian'},
            {key: 12, name: 'Kelvin'},
            {key: 13, name: 'Yola'},
            {key: 14, name: 'Arka'},
            {key: 15, name: 'Edwin'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        />
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
