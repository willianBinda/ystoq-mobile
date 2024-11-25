import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Copyright } from '../../../components/organisms';
import { useFocusEffect } from '@react-navigation/native';
import { CatType, ProdutoType } from '../../../types';

import {
  atualizarProduto,
  getCat,
  getProdutoId,
} from '../../../utils/produtos';
import ProdutoCard from '../../../components/organisms/produtoCard';

export default ({ route }: { route: any }) => {
  const [catList, setCatList] = useState<{ label: string; value: number }[]>(
    [],
  );
  const [produto, setProduto] = useState({
    descricao: '',
    id_categoria_produto: 0,
    quantidade: '',
  });
  const onChange = (name: string, value: string | number) => {
    setProduto((prevent) => {
      return {
        ...prevent,
        [name]: value,
      };
    });
  };
  const onPut = async () => {
    for (const [_, value] of Object.entries(produto)) {
      if (!value) {
        // Verifica se o campo está vazio (null, undefined, ou "")
        Alert.alert('Erro!', 'Preencha os campos corretamente!');
        return;
      }
    }

    try {
      await atualizarProduto(route.params.produtoId, produto);
      Alert.alert('Sucesso!', 'Produto atualizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro!', 'Não foi possível atualizar os dados do produto!');
    }
  };
  const setUp = async () => {
    try {
      const data: ProdutoType = await getProdutoId(route.params.produtoId);
      const data2: CatType[] = await getCat();
      const options = data2.map((item) => {
        return {
          label: item.descricao,
          value: item.id,
        };
      });
      setCatList(options);
      setProduto({
        descricao: data.descricao,
        id_categoria_produto: data.id_categoria_produto,
        quantidade: data.quantidade.toString(),
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
      <ProdutoCard
        item={produto}
        onChange={onChange}
        label="atualizar"
        onPost={onPut}
        categoriaList={catList}
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
