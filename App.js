
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from './src/global/styles'
import SigninScreen from './src/screens/authScreens/SigninScreen';


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor ={colors.statusBar}
      />
      <SigninScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
