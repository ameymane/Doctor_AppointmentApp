import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import BookAppointment from './screens/BookAppointment';
import Success from './screens/Success';
import Pending from './screens/Pending';
import Completed from './screens/Completed';
import Ambulance from './screens/Ambulance';
import Started from './screens/Started';
import Catagory from './screens/Catagory';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={Splash} name="Splash" />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={BookAppointment} name="BookAppointment" />
        <Stack.Screen component={Success} name="Success" />
        <Stack.Screen component={Pending} name="Pending" />
        <Stack.Screen component={Completed} name="Completed" />
        <Stack.Screen component={Ambulance} name="Ambulance" />
        <Stack.Screen component={Started} name="Started" />
        <Stack.Screen component={Catagory} name="Catagory" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
