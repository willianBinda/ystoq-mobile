import React from 'react';
import { RegisterInputs, RegisterButtons } from '../../molecules';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Label } from '../../atons';

interface Props {
  handleInput: (name: string, value: string) => void;
  onRegister: () => void;
  spinner: boolean;
}

export default ({ handleInput, onRegister, spinner }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Label label="Cadastro" style={styles.title} />
        <RegisterInputs handleInput={handleInput} />
        <RegisterButtons onRegister={onRegister} spinner={spinner} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: '#377599',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  scroll: {
    width: '90%',
  },
});
