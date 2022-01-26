import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './src/types/navigation';

// Screens
import HomeScreen from './src/screens/Home';
import ProblemOneScreen from './src/screens/ProblemOneScreen';
import ProblemTwoScreen from './src/screens/ProblemTwoScreen';
import ProblemThreeScreen from './src/screens/ProblemThreeScreen';
import ProblemFourScreen from './src/screens/ProblemFourScreen';

// Initialize the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContainer = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} options={{ title: 'INICIO' }} />
      <Stack.Screen name="problemFourScreen" component={ProblemFourScreen} options={{ title: 'PROBLEMA 4' }} />
      <Stack.Screen name="problemOneScreen" component={ProblemOneScreen} options={{ title: 'PROBLEMA 1' }} />
      <Stack.Screen name="problemTwoScreen" component={ProblemTwoScreen} options={{ title: 'PROBLEMA 2' }} />
      <Stack.Screen name="problemThreeScreen" component={ProblemThreeScreen} options={{ title: 'PROBLEMA 3' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default () => (
  <AppContainer />
);
