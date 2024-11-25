import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Input, Label, Pressable } from '../../atons';
import { onPathEstoque } from '../../../utils/novoEstoque';

interface Props {
  onChange: (name: string, value: string) => void;
  item: {
    descricao: string;
    quantidade: string;
    endereco: string;
  };
  estoqueId: string;
}

export default ({ onChange, item, estoqueId }: Props) => {
  return (
    <View style={styles.container}>
      <Label style={styles.label} label="Edição de Estoque" />
      <Input
        placeholder="Descrição"
        style={styles.input}
        onChangeText={(text) => onChange('descricao', text)}
        value={item.descricao}
      />
      <Input
        value={item.quantidade}
        placeholder="Quantidade máxima (unidade)"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => onChange('quantidade', text)}
      />
      <Input
        value={item.endereco}
        placeholder="Endereco"
        style={styles.input}
        onChangeText={(text) => onChange('endereco', text)}
      />
      <Pressable
        style={[styles.button, styles.buttonCadastrar]}
        onPress={() => {
          try {
            onPathEstoque(estoqueId, item);

            Alert.alert('Sucesso!', 'Estoque atualizado com sucesso!');
          } catch (error) {
            Alert.alert('Alerta!', 'Não foi possível atualizar o estoque!');
          }
        }}
      >
        <Label style={styles.textStyle} label="Editar" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
