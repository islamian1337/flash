import React from 'react';
import Main from '../screen/main';
import SignUp from '../screen/signup';
import Counter from '../screen/counter';
import Goals from '../screen/goals';
import AgeRange from '../screen/age_range';
import Topics from '../screen/topics'
import PricePlan from '../screen/price_plan';
import WebViewPage from '../screen/web_view';
import Login from '../screen/login';
import CheckOut from '../screen/checkout';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useThemeContext} from '../../providers/ThemeProvider';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const {theme} = useThemeContext();

  return (
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
    </Stack.Navigator>
  );
}

export default RootNavigator;
