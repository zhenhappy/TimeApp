import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export class TimerDisplay extends Component {
  render() {
    var minutes   = '00',
      seconds   = '00',
      hundredth = '00';
    return (
      <View style={styles.container}>
        <View style={styles.timerCircle}>
          <View style={styles.displayContainer}>
            <Text style={styles.mainLabel}>
              {minutes}:{seconds}
            </Text>
            <Text style={styles.subLabel}>
              {hundredth}
            </Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timerCircle: {
    width: 200,
    height: 200,
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 100
  },
  displayContainer: {
    width: 200,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainLabel: {
    fontSize: 30,
    color: 'white'
  },
  subLabel: {
    fontSize: 15,
    color: 'white',
    marginBottom: -10
  }
});
