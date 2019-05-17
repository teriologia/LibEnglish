import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import RouterComponent from './src/router'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <RouterComponent />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
