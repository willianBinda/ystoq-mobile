import React from 'react';
import { Picker, PickerProps } from '@react-native-picker/picker';

interface Props extends PickerProps {
  data: any[];
  initialValue: string;
}

export default ({ data, initialValue, ...rest }: Props) => {
  return (
    <Picker {...rest}>
      <Picker.Item label={initialValue} value="" enabled={false} />
      {data.map((item, key) => {
        return <Picker.Item key={key} label={item.label} value={item.value} />;
      })}
    </Picker>
  );
};
