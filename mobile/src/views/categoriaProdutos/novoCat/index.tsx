import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { CategoriaCard, Copyright } from '../../../components/organisms';
import { cadastrarCategoria } from '../../../utils/produtos';

export default () => {
  const [cat, setCat] = useState({
    descricao: '',
  });

  const onChange = (name: string, value: string) => {
    setCat({ descricao: value });
  };

  const onPost = async () => {
    if (!cat.descricao) {
      // Verifica se o campo está vazio (null, undefined, ou "")
      Alert.alert('Erro!', 'Preencha o campo corretamente!');
      return;
    }

    try {
      await cadastrarCategoria(cat);
      Alert.alert(
        'Sucesso!',
        'Nova categoria de produto cadastrada com sucesso!',
      );
      setCat({
        descricao: '',
      });
    } catch (error) {
      Alert.alert(
        'Erro!',
        'Não foi possível cadastrar uma nova categoria de produto!',
      );
    }
  };

  return (
    <View style={styles.container}>
      <CategoriaCard
        onPost={onPost}
        item={cat}
        onChange={onChange}
        label="cadastrar"
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
