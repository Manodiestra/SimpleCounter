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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.black,
    },
    scrollView: {
      backgroundColor: Colors.black,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      borderWidth: 8,
      borderColor: Colors.white,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.white,
    },
  });

  increment = () => {
    this.setState((state) => {
      console.log("increment button");
    });
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={this.styles.MainContainer}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={this.styles.scrollView}>
            <View style={this.styles.sectionContainer}>
              <Text style={this.styles.sectionTitle}>Step One</Text>
            </View>
            <UpButton title="+" onPress={this.increment}/>
            <UpButton title="-" onPress={this.increment}/>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
