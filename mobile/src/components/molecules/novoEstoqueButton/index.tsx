import React from 'react';
import { Label, Pressable } from '../../atons';
import { StyleSheet } from 'react-native';

interface Props {
  onPostEstoque: () => void;
}

export default ({ onPostEstoque }: Props) => {
  return (
    <>
      <Pressable
        style={[styles.button, styles.buttonCadastrar]}
        onPress={() => {
          onPostEstoque();
        }}
      >
        <Label style={styles.textStyle} label="Cadastrar" />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonCadastrar: {
    backgroundColor: '#5583AC',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
