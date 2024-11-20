import React from 'react';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

export default ({ ...props }: TextInputMaskProps) => {
  return <TextInputMask {...props} />;
};
