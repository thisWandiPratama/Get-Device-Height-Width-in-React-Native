import React, { Component } from 'react';
//import react in our project

import { StyleSheet, View, Button, Dimensions, Alert } from 'react-native';
//import all the componnt we needed

export default class App extends Component {
  GetHeight = () => {
    //handler to get device Height
    const Height = Dimensions.get('window').height;
    //Here is the height of the device
    Alert.alert('Device Height: ' + Height);
  };

  GetWidth = () => {
    //handler to get device Width
    const Width = Dimensions.get('window').width;
    //Here is the Width of the device
    Alert.alert('Device Width: ' + Width);
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.ButtonStyle}>
          <Button
            title="Click Here To Show Device Height"
            onPress={this.GetHeight}
          />
        </View>
        <View style={styles.ButtonStyle}>
          <Button
            title="Click Here To Show Device Width"
            onPress={this.GetWidth}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    margin: 10,
   
  },

  ButtonStyle: {
    margin: 10,
    //Example 
    //width:window.width-100,
  },
});
