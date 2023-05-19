import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';
import Intro from '../screen/Intro';
import MaterialBottomTabNavigator from './MaterialBottomTabNavigator';
import MaterialTopTabNavigator from './MaterialTopTabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigator from './StackNavigator';
import {useThemeContext} from '../../providers/ThemeProvider';
import Main from '../screen/main';
import SignUp from '../screen/signup';
import Counter from '../screen/counter';
import Goals from '../screen/goals';
import AgeRange from '../screen/age_range';
import Topics from '../screen/topics';
import PricePlan from '../screen/price_plan';
import WebViewPage from '../screen/web_view';
import Login from '../screen/login';
import CheckOut from '../screen/checkout';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const {theme} = useThemeContext();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Goals" component={Goals} />
        <Stack.Screen name="AgeRange" component={AgeRange} />
        <Stack.Screen name="Topics" component={Topics} />
        <Stack.Screen name="PricePlan" component={PricePlan} />
        <Stack.Screen name="WebView" component={WebViewPage} />
        <Stack.Screen name="Checkout" component={CheckOut} />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="MaterialTopTabNavigator"
          component={MaterialTopTabNavigator}
        />
        <Stack.Screen
          name="MaterialBottomTabNavigator"
          component={MaterialBottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
