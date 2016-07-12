import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TimerDisplay } from './TimerDisplay.js';
import { TimerControls } from './TimerControls.js';

export class TimerApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timerDisplayLayout}>
          <TimerDisplay/>
        </View>
        <View style={styles.controlsLayout}>
          <TimerControls/>
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
    flex: 3,
    backgroundColor: 'rgba(255,0,0,0.3)'
  },
  controlsLayout: {
    flex: 1,
    backgroundColor: 'rgba(0,255,0,0.3)'
  }
});
