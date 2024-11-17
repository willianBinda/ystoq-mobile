import React from 'react';
import { Button, ButtonProps } from 'react-native';

interface Props extends ButtonProps {}

export default ({ ...props }: Props) => {
  return <Button {...props} />;
};
