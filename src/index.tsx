import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Stack from './routes/stack';

export default () => {
  return (
    <SafeAreaProvider>
      <Stack />
    </SafeAreaProvider>
  );
};
