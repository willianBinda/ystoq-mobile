import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Label, Pressable, Select } from '../../atons';

interface Props {
  onChange: (name: string, value: string | number) => void;
  item: {
    descricao: string;
    id_categoria_produto: number;
    quantidade: string;
  };
  onPost: () => void;
  label: string;
  categoriaList: {
    label: string;
    value: number;
  }[];
}

export default ({ label, onChange, item, onPost, categoriaList }: Props) => {
  return (
    <View style={styles.container}>
      <Label
        style={styles.label}
        label={
          label === 'cadastrar' ? 'Cadastro de Produto' : 'Edição de Produto'
        }
      />
      <Input
        placeholder="Descrição"
        style={styles.input}
        onChangeText={(text) => onChange('descricao', text)}
        value={item.descricao}
      />

      <View style={styles.select}>
        <Select
          initialValue="Categoria"
          data={categoriaList}
          selectedValue={item.id_categoria_produto}
          onValueChange={(itemValue) =>
            onChange('id_categoria_produto', itemValue)
          }
        />
      </View>

      <Input
        value={item.quantidade}
        placeholder="Quantidade mínima"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(text) => onChange('quantidade', text)}
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
