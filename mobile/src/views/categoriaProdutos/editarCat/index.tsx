import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { CategoriaCard, Copyright } from '../../../components/organisms';
import { useFocusEffect } from '@react-navigation/native';
import { CatType } from '../../../types';

import { atualizarCategoria, getCatId } from '../../../utils/produtos';

export default ({ route }: { route: any }) => {
  const [cat, setCat] = useState({
    descricao: '',
  });
  const onChange = (name: string, value: string) => {
    setCat({ descricao: value });
  };
  const onPut = async () => {
    if (!cat.descricao) {
      // Verifica se o campo está vazio (null, undefined, ou "")
      Alert.alert('Erro!', 'Preencha os campos corretamente!');
      return;
    }

    try {
      await atualizarCategoria(route.params.catId, cat);
      Alert.alert('Sucesso!', 'Categoria de produto atualizado com sucesso!');
    } catch (error) {
      Alert.alert(
        'Erro!',
        'Não foi possível atualizar os dados da categoria do produto!',
      );
    }
  };
  const setUp = async () => {
    try {
      const data: CatType = await getCatId(route.params.catId);

      setCat({
        descricao: data.descricao,
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
      <CategoriaCard
        item={cat}
        onChange={onChange}
        label="atualizar"
        onPost={onPut}
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
