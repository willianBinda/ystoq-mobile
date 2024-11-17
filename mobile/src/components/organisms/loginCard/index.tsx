import React from 'react';
import { LoginButtons, LoginInputs } from '../../molecules';
import { StyleSheet, View } from 'react-native';
import { Label } from '../../atons';

interface Props {
  handleInput: (name: string, value: string) => void;
  onLogin: () => void;
  spinner: boolean;
}

export default ({ handleInput, onLogin, spinner }: Props) => {
  return (
    <View style={styles.container}>
      <Label label="Login" style={styles.title} />
      <LoginInputs handleInput={handleInput} />
      <LoginButtons onLogin={onLogin} spinner={spinner} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: '#377599',
    fontWeight: 'bold',
  },
});
