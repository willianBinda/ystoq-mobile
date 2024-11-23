import React from 'react';
import { Label, Pressable, Spinner } from '../../atons';
import { StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
interface Props {
  onLogin: () => void;
  spinner: boolean;
}

export default ({ onLogin, spinner }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
      <Pressable style={styles.login} onPress={onLogin}>
        {spinner ? (
          <Spinner size="small" color="#0000ff" />
        ) : (
          <Label label="Login" style={styles.loginLabel} />
        )}
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Register')}>
        <Label label="Não possui cadastro?" style={styles.label} />
      </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  label: {
    color: '#377599',
    fontWeight: 'bold',
  },
  login: {
    backgroundColor: '#377599',
    width: '50%',
    alignItems: 'center',
    height: '15%',
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginLabel: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
