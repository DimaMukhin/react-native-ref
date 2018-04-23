import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ''
  }
  
  placeNameChangedHandler = (value) => {
    this.setState({
      placeName: value
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={{width: 300}}
          placeholder="A cool place"
          value={this.state.placeName} 
          onChangeText={this.placeNameChangedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
