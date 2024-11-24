import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { axios } from '../../../actions';
import { Copyright, NovoEstoqueCard } from '../../../components/organisms';

export default () => {
  const [cadastrarEstoque, setCadastrarEstoque] = useState({
    descricao: '',
    quantidade: null,
    endereco: '',
  });

  const onPostEstoque = async () => {
    if (
      !cadastrarEstoque.descricao ||
      !cadastrarEstoque.endereco ||
      !cadastrarEstoque.quantidade
    ) {
      Alert.alert('Alerta!', 'Preencha os campos adequadamente!');
      return;
    }
    // console.log(body);
    try {
      await axios.post('/estoque', cadastrarEstoque);
      //   setEstoqueData(data);
      Alert.alert('Sucesso!', 'Estoque cadastrado com sucesso!');
    } catch (error: any) {
      Alert.alert('Erro', 'Não foi possível cadastrar o estoque!');
      //   console.log(error.response.data);
      //   setEstoqueData([]);
    }
  };
  const onChange = (name: string, value: string | number) => {
    setCadastrarEstoque((prevent) => {
      return {
        ...prevent,
        [name]: value,
      };
    });
  };
  return (
    <View style={styles.container}>
      <NovoEstoqueCard onChange={onChange} onPostEstoque={onPostEstoque} />
      <Copyright />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    margin: 15,
    flex: 1,
  },
});
