import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Copyright, UsuarioCard } from '../../../components/organisms';
import { cadastrarUsuario } from '../../../utils/usuarios';

export default () => {
  const [usuario, setUsuario] = useState({
    email: '',
    nome: '',
    telefone: '',
    senha: '',
  });
  const onChange = (name: string, value: string) => {
    setUsuario((prevent) => {
      return {
        ...prevent,
        [name]: value,
      };
    });
  };
  const onPostUsuario = async () => {
    // console.log(usuario);

    for (const [key, value] of Object.entries(usuario)) {
      if (!value) {
        // Verifica se o campo está vazio (null, undefined, ou "")
        Alert.alert('Erro!', `O campo ${key} não deve ser nulo!`);
        return;
      }
    }

    try {
      await cadastrarUsuario(usuario);
      Alert.alert('Sucesso!', 'Novo usuário cadastrado com sucesso!');
      setUsuario({
        email: '',
        nome: '',
        telefone: '',
        senha: '',
      });
    } catch (error) {
      Alert.alert('Erro!', 'Não foi possível cadastrar um novo usuário!');
    }
  };
  return (
    <View style={styles.container}>
      <UsuarioCard
        item={usuario}
        onChange={onChange}
        label="cadastrar"
        onPostUsuario={onPostUsuario}
      />
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
