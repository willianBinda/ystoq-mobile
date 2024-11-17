import React from 'react';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  label: string;
}

export default ({ label, ...rest }: Props) => {
  return <Text {...rest}>{label}</Text>;
};
