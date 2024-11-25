import React, { useContext, useState } from 'react';
import { Alert, ImageBackground, StyleSheet } from 'react-native';
import { LoginCard } from '../../components/organisms';
import { axios, setStoreData } from '../../actions';
import { Context } from '../../context/authContext';

export default () => {
  const { setToken, setLogged, setEmail, setAdminFlag } = useContext(Context);
  const [spinner, setSpinner] = useState(false);
  const [body, setBody] = useState({
    email: '',
    senha: '',
  });
  const handleInput = (name: string, value: string) => {
    setBody((prevent) => {
      return {
        ...prevent,
        [name]: value,
      };
    });
  };
  const onLogin = async () => {
    setSpinner(true);
    if (!body.email || !body.senha) {
      Alert.alert('Erro', 'Preencha todas as informações!');
      setSpinner(false);
      return;
    }
    try {
      const { data } = await axios.post('/login', body);
      //eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { admin_flag, email, token, ...rest } = data;
      await setStoreData({
        admin_flag,
        email,
        token,
      });
      Alert.alert('Bem vindo!', data.message);
      setToken(token);
      setEmail(data.email);
      setAdminFlag(admin_flag);

      setLogged(true);
      setSpinner(false);
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
