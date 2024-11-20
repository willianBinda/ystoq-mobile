import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet } from 'react-native';
import { RegisterCard } from '../../components/organisms';
import { api } from '../../actions';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  // outras rotas, se houver
};

export default () => {
  const [spinner, setSpinner] = useState(false);
  const [body, setBody] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmar_senha: '',
    nome_empresa: '',
    cnpj: '',
  });
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleInput = (name: string, value: string) => {
    setBody((prevent) => {
      return {
        ...prevent,
        [name]: value,
      };
    });
  };
  const onRegister = async () => {
    setSpinner(true);
    if (
      !body.confirmar_senha ||
      !body.senha ||
      !body.cnpj ||
      !body.email ||
      !body.nome ||
      !body.nome_empresa ||
      !body.telefone
    ) {
      Alert.alert('Erro', 'Preencha todas as informações!');
      setSpinner(false);
      return;
    } else if (body.confirmar_senha !== body.senha) {
      Alert.alert('Erro', 'As senhas precisam ser iguais!');
      setSpinner(false);
      return;
    } else if (body.confirmar_senha.length < 5 || body.senha.length < 5) {
      Alert.alert('Erro', 'As senhas precisam ter no mínimo de 6 caracteres!');
      setSpinner(false);
      return;
    }
    try {
      const { data } = await api.post('/usuario', body);
      Alert.alert('Sucesso!', data.detail);
      setSpinner(false);
      navigation.navigate('Login');
    } catch (error: any) {
      //   console.log(error.response.data);
      Alert.alert(
        'Erro',
        error.response.data.error
          ? error.response.data.error
          : 'Ocorreu um erro inesperado, tente novamente mais tarde!',
      );
      setSpinner(false);
    }
  };
  return (
    <ImageBackground
      source={require('../../assets/estoque-login.jpg')}
      style={styles.backgroundImage}
    >
      <RegisterCard
        handleInput={handleInput}
        onRegister={onRegister}
        spinner={spinner}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
});
