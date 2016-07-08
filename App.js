import {
  StyleSheet,
  View,
  Component,
} from "react-native";

export class App extends Component {
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
    backgroundColor: 'rgba(255,0,0,0.3)'
  },
  controlsLayout: {
    backgroundColor: 'rgba(0,255,0,0.3)'
  }
});
