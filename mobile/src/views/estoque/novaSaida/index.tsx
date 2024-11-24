import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { axios } from '../../../actions';
import { Copyright, NovaSaidaEstoqueCard } from '../../../components/organisms';
import { useFocusEffect } from '@react-navigation/native';

export default () => {
  const [estoqueList, setEstoqueList] = useState([]);
  const [produtoList, setProdutoList] = useState<
    {
      value: number;
      label: string;
    }[]
  >([]);

  useFocusEffect(
    useCallback(() => {
      const setUp = async () => {
        try {
          const { data } = await axios.get('/estoque');
          setEstoqueList(
            data?.map((item: any) => {
              return {
                label: item.descricao,
                value: item.id,
              };
            }),
          );
        } catch (error) {}

        try {
          const { data } = await axios.get('/produto');

          setProdutoList(
            data?.map((item: any) => {
              return {
                label: item.descricao,
                value: item.id,
              };
            }),
          );
        } catch (error) {}
      };
      setUp();
    }, []),
  );

  const [saidaEstoque, setSaidaEstoque] = useState({
    id_estoque: null,
    id_produto: null,
    quantidade: null,
    tipo: '1',
    data: '',
    descricao: '',
  });

  const onPostEstoqueSaida = async () => {
    for (let key in saidaEstoque) {
      if (
        saidaEstoque[key as keyof typeof saidaEstoque] === null ||
        saidaEstoque[key as keyof typeof saidaEstoque] === ''
      ) {
        Alert.alert('Alerta!', 'Preencha os campos adequadamente!');
        break;
      }
    }
    try {
      const { data } = await axios.post('/movimentacao-estoque', saidaEstoque);

      Alert.alert('Sucesso!', data.detail);
    } catch (error: any) {
      Alert.alert('Erro', 'Não foi possível gerar uma nova saída!');
    }
  };
  const onChange = (name: string, value: string | number) => {
    setSaidaEstoque((prevent) => {
      return {
        ...prevent,
        [name]: value,
      };
    });
  };
  return (
    <View style={styles.container}>
      <NovaSaidaEstoqueCard
        onChange={onChange}
        onPostEstoqueSaida={onPostEstoqueSaida}
        estoqueList={estoqueList}
        saidaEstoque={saidaEstoque}
        produtoList={produtoList}
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
