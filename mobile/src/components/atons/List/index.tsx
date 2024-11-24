import React from 'react';
import { FlatList, FlatListProps } from 'react-native';

export default ({ ...props }: FlatListProps<any>) => {
  return <FlatList {...props} />;
};
