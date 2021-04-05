import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PhoneNumberScreen from '../screens/PhoneNumberScreen';
import VerificationCodeScreen from '../screens/VerificationCodeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {projColors} from '../constants';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PhoneNumber"
        component={PhoneNumberScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerificationCode"
        component={VerificationCodeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {backgroundColor: projColors.backGround, elevation: 0},
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
