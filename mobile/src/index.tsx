import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Stack from './routes/stack';
import { Provider } from './context/authContext';

export default () => {
  return (
    <Provider>
      <SafeAreaProvider>
        <Stack />
      </SafeAreaProvider>
    </Provider>
  );
};
