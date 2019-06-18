import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {

  state = {
     placeName: ''
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style = {{width: 300}}
          placeholder = "An awesome place"
          value = {this.state.placeName}
          onChangeText = {this.placeNameChangedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
