import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet } from 'react-native';
import { LoginCard } from '../../components/organisms';
import { api, setStoreData } from '../../actions';

export default () => {
  const [spinner, setSpinner] = useState(false);
  const [body, setBody] = useState({
    email: '',
    senha: '',
  });
  const handleInput = (name: string, value: string) => {
    setBody((prevent) => {
      if (name === 'email') {
        return {
          ...prevent,
          email: value,
        };
      } else if (name === 'senha') {
        return {
          ...prevent,
          senha: value,
        };
      } else {
        return {
          ...prevent,
        };
      }
    });
  };
  const onLogin = async () => {
    setSpinner(true);
    try {
      const { data, status } = await api.post('/login', body);
      if (status === 200) {
        //eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { admin_flag, email, token, ...rest } = data;
        setStoreData({
          admin_flag,
          email,
          token,
        });
        Alert.alert('Bem vindo!', data.message);
        setSpinner(false);
      } else {
        Alert.alert('Erro', data.message);
        setSpinner(false);
      }
    } catch (error: any) {
      Alert.alert(
        'Erro',
        error.response.data.message
          ? error.response.data.message
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
      <LoginCard
        handleInput={handleInput}
        onLogin={onLogin}
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
