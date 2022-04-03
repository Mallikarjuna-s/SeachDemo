
import * as React from 'react';
import { View, Text } from 'react-native';
import RenderUI from "./app";

const SplashScreen=()=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <RenderUI/>
      </View>
    );
  }
export default SplashScreen;