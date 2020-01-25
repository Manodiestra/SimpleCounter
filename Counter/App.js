import React from 'react';
import UpButton from './components/upButton';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends React.Component {
  styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    sectionContainer: {
      margin: 24,
      borderWidth: 8,
      borderColor: 'white',
      height: 200,
      width: 200,
      borderRadius: 200,
    },
    sectionTitle: {
      fontSize: 96,
      fontWeight: '600',
      color: 'white',
      textAlign: 'center',
      marginTop: 16,
    },
  });

  state = {
    countVal: 0,
  };

  increment = () => {
    this.setState(state => {
      console.log(state);
      console.log(state.countVal);
      this.state.countVal += 1;
      return state;
    });
  };

  decrement = () => {
    this.setState(state => {
      console.log(state);
      console.log(state.countVal);
      this.state.countVal -= 1;
      return state;
    });
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={this.styles.MainContainer}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={this.styles.sectionContainer}>
              <Text style={this.styles.sectionTitle}>
                {this.state.countVal}
              </Text>
            </View>
            <UpButton title="+" onPress={this.increment}/>
            <UpButton title="-" onPress={this.decrement}/>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
