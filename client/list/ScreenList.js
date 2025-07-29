import { View, Text } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Groups from '../screens/Groups';
import Friends from '../screens/Friends';
import Activity from '../screens/RecentActivity';


const ScreenList = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Groups">
            <Stack.Screen 
              name="Splash" 
              component={Splash}  />
            <Stack.Screen 
              name="Login" 
              component={Login} />
            <Stack.Screen 
              name="SignUp" 
              component={SignUp} />
            <Stack.Screen 
              name="Home" 
              component={Home} />
            <Stack.Screen 
              name="Profile" 
              component={Profile} />
            <Stack.Screen 
              name="Groups" 
              component={Groups} />
            <Stack.Screen 
              name="Friends" 
              component={Friends} />
            <Stack.Screen 
              name="Activity" 
              component={Activity} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenList;