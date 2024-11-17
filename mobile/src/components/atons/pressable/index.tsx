import React, { ReactNode } from 'react';
import { Pressable, PressableProps } from 'react-native';

interface Props extends PressableProps {
  children: ReactNode;
}

export default ({ children, ...rest }: Props) => {
  return <Pressable {...rest}>{children}</Pressable>;
};
