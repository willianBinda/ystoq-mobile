import React, { useState } from 'react';
import { Input, Pressable, SearchIcon } from '../../atons';
import { StyleSheet } from 'react-native';

interface Props {
  onSearch: (value: string) => void;
}

export default ({ onSearch }: Props) => {
  const [data, setData] = useState('');
  return (
    <>
      <Input
        style={styles.input}
        placeholder="Pesquisar..."
        onChangeText={(text) => setData(text)}
      />
      <Pressable style={styles.btn} onPress={() => onSearch(data)}>
        <SearchIcon />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  btn: {
    flex: 0.5,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
