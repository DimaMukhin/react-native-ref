import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  }
  
  placeNameChangedHandler = (value) => {
    this.setState({
      placeName: value
    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "")
      return;

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ));

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput 
          style={{width: 300}}
          placeholder="A cool place"
          value={this.state.placeName} 
          onChangeText={this.placeNameChangedHandler} 
          style={styles.placeInput} />
          <Button 
            title="Add"
            style={styles.placeButton} 
            onPress={this.placeSubmitHandler} />
        </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 26,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
