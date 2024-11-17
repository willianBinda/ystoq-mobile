import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

export default ({ ...props }: ActivityIndicatorProps) => {
  return <ActivityIndicator {...props} />;
};
