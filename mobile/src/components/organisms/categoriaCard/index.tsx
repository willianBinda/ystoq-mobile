import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Label, Pressable } from '../../atons';

interface Props {
  onChange: (name: string, value: string) => void;
  item: {
    descricao: string;
  };
  onPost: () => void;
  label: string;
}

export default ({ label, onChange, item, onPost }: Props) => {
  return (
    <View style={styles.container}>
      <Label
        style={styles.label}
        label={
          label === 'cadastrar'
            ? 'Cadastro de Categoria'
            : 'Edição de Categoria'
        }
      />
      <Input
        placeholder="Descrição"
        style={styles.input}
        onChangeText={(text) => onChange('descricao', text)}
        value={item.descricao}
      />

      <Pressable
        style={[styles.button, styles.buttonCadastrar]}
        onPress={() => {
          onPost();
        }}
      >
        <Label
          style={styles.textStyle}
          label={label === 'cadastrar' ? 'Cadastrar' : 'Editar'}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  select: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 25,
    color: '#4F7598',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
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
