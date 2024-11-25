import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Copyright, ProdutoCard } from '../../../components/organisms';
import { useFocusEffect } from '@react-navigation/native';
import { cadastrarProduto, getCat } from '../../../utils/produtos';
import { CatType } from '../../../types';

export default () => {
  const [catList, setCatList] = useState<{ label: string; value: number }[]>(
    [],
  );
  const [produto, setProduto] = useState({
    descricao: '',
    id_categoria_produto: 0,
    quantidade: '',
  });

  const onChange = (name: string, value: string | number) => {
    // console.log(name);
    // console.log(value);
    setProduto((prevent) => {
      return {
        ...prevent,
        [name]: value,
      };
    });
  };

  const onPost = async () => {
    for (const [_, value] of Object.entries(produto)) {
      if (!value) {
        // Verifica se o campo está vazio (null, undefined, ou "")
        Alert.alert('Erro!', 'Preencha os campos corretamente!');
        return;
      }
    }

    try {
      await cadastrarProduto(produto);
      Alert.alert('Sucesso!', 'Novo produto cadastrado com sucesso!');
      setProduto({
        descricao: '',
        id_categoria_produto: 0,
        quantidade: '',
      });
    } catch (error) {
      Alert.alert('Erro!', 'Não foi possível cadastrar um novo produto!');
    }
  };
  const setUp = async () => {
    try {
      const data: CatType[] = await getCat();
      const options = data.map((item) => {
        return {
          label: item.descricao,
          value: item.id,
        };
      });
      setCatList(options);
    } catch (error) {}
  };

  useFocusEffect(
    useCallback(() => {
      setUp();
    }, []),
  );
  return (
    <View style={styles.container}>
      <ProdutoCard
        categoriaList={catList}
        onPost={onPost}
        item={produto}
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
