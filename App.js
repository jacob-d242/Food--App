
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from './src/global/styles'
import RootNavigator from './src/navigation/Rootnavigator';


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor ={colors.statusBar}
      />
        <RootNavigator/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
