import React from 'react';
import { Label, Pressable, Spinner } from '../../atons';
import { StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface Props {
  onRegister: () => void;
  spinner: boolean;
}
// Defina os tipos das rotas que o seu app possui
type RootStackParamList = {
  Login: undefined;
  // outras rotas, se houver
};

export default ({ onRegister, spinner }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
      <Pressable style={styles.register} onPress={onRegister}>
        {spinner ? (
          <Spinner size="small" color="#0000ff" />
        ) : (
          <Label label="Cadastrar" style={styles.registerLabel} />
        )}
      </Pressable>

      <Pressable
        style={styles.info}
        onPress={() => navigation.navigate('Login')}
      >
        <Label
          label="Já possui cadastro? Faça login"
          style={styles.infoLabel}
        />
      </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  infoLabel: {
    color: '#377599',
    fontWeight: 'bold',
  },
  info: {
    alignSelf: 'center',
  },
  register: {
    backgroundColor: '#377599',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
    height: 50,
  },
  registerLabel: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
