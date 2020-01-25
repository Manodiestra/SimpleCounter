import React from 'react';

import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export default class UpButton extends React.Component {
  styles = StyleSheet.create({
    button: {
      backgroundColor: 'black',
      margin: 16,
      borderRadius: 96,
      padding: 24,
      width: 146,
      height: 146,
      alignSelf: 'center',
      borderWidth: 8,
      borderColor: 'white',
    },
    title: {
      fontSize: 64,
      alignSelf: 'center',
      color: 'white',
    },
  });

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[this.styles.button, this.props.style]}>
          <Text style={[this.styles.title, this.props.titleStyle]}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
