import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React from 'react';
import { Alert, Button } from 'react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
    <>
      <SafeAreaProvider>
      
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      <NavigationContainer>
      {/* Rest of your app code */}
    </NavigationContainer>
    </>
    );
  }
}
