import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Copyright, UsuarioCard } from '../../../components/organisms';
import { useFocusEffect } from '@react-navigation/native';
import { Usuarios } from '../../../types';
import { atualizarUsuario, getUsuarioId } from '../../../utils/usuarios';

export default ({ route }: { route: any }) => {
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
  const onPutUsuario = async () => {
    // console.log(usuario);

    for (const [key, value] of Object.entries(usuario)) {
      if (key !== 'senha') {
        if (!value) {
          // Verifica se o campo está vazio (null, undefined, ou "")
          Alert.alert('Erro!', `O campo ${key} não deve ser nulo!`);
          return;
        }
      }
    }

    try {
      await atualizarUsuario(route.params.usuarioId, usuario);
      Alert.alert('Sucesso!', 'Usuário atualizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro!', 'Não foi possível atualizar os dados do usuário!');
    }
  };
  const setUp = async () => {
    try {
      const data: Usuarios = await getUsuarioId(route.params.usuarioId);
      setUsuario({
        email: data.email,
        nome: data.nome,
        senha: '',
        telefone: data.telefone,
      });
    } catch (error) {}
  };
  useFocusEffect(
    useCallback(() => {
      setUp();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );
  return (
    <View style={styles.container}>
      <UsuarioCard
        item={usuario}
        onChange={onChange}
        label="atualizar"
        onPostUsuario={onPutUsuario}
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
