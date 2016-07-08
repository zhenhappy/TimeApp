import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export class TimerApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timerDisplayLayout}>
          <Text>1</Text>
        </View>
        <View style={styles.controlsLayout}>
          <Text>2</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch'
  },
  timerDisplayLayout: {
    flex: 1,
    backgroundColor: 'rgba(255,0,0,0.3)'
  },
  controlsLayout: {
    flex: 1,
    backgroundColor: 'rgba(0,255,0,0.3)'
  }
});
