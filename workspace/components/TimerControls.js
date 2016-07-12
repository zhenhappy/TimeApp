import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

export class TimerControls extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../imgs/start-icon.png')} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch'
  }
});
