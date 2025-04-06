import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CurrencyProvider } from './contexts/CurrencyContext';
import SettingsScreen from './screens/SettingsScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import MonthlyTrackingScreen from './screens/MonthlyTrackingScreen';
import ReturnsScreen from './screens/ReturnsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CurrencyProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Portfolio">
          <Stack.Screen name="Portfolio" component={PortfolioScreen} options={{ title: 'توزيع المحفظة' }} />
          <Stack.Screen name="Monthly" component={MonthlyTrackingScreen} options={{ title: 'المتابعة الشهرية' }} />
          <Stack.Screen name="Returns" component={ReturnsScreen} options={{ title: 'حساب العائد' }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'إعدادات العملة' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CurrencyProvider>
  );
}