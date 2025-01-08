import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import PostFeed from '../components/PostFeed';
import AuthScreen from '../components/AuthScreen';
import {navigationRef} from '../utils/navigationRef';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="AuthScreen">
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PostFeed"
          component={PostFeed}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
