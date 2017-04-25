import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  WebView
} from 'react-native';

export default class BlockBro extends Component {
  render() {
    return (
      <View>
      <View >
        <Text >
          BlockBro Live
        </Text>
        </View>

        <TextInput placeholder="Type here the urla!"/>
      <WebView
        source={{uri: 'http://www.nation.co.ke/'}}
        style={{marginTop: 20}}
        scalesPageToFit={true}
      />
      </View>

    );
  }
}

AppRegistry.registerComponent('BlockBro', () => BlockBro);
