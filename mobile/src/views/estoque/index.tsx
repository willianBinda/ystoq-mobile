import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { axios } from '../../actions';
import { EstoqueType } from '../../types';
import { Copyright, EstoqueList } from '../../components/organisms';

export default () => {
  const [estoqueData, setEstoqueData] = useState<EstoqueType[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const setUpDataList = async (serach: string = '') => {
    const { data } = await axios.get('/estoque?search=' + serach);
    setEstoqueData(data);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    try {
      await setUpDataList();
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
    }
  }, []);
  useFocusEffect(
    useCallback(() => {
      const setUp = async () => {
        try {
          await setUpDataList();
        } catch (error) {}
      };
      setUp();

      //   // Opcional: Retorne uma função de limpeza se necessário
      //   return () => {
      //     console.log('A tela perdeu o foco!');
      //   };
    }, []),
  );
  const onSearch = async (value: string = '') => {
    try {
      await setUpDataList(value);
    } catch (error) {
      setEstoqueData([]);
    }
  };
  const onPostEstoque = async (body: any) => {
    // console.log(body);
    try {
      const { data } = await axios.post('/estoque?search=', body);
      //   setEstoqueData(data);
      Alert.alert('Sucesso!', data.detail + '. Recarregue a lista!');
    } catch (error: any) {
      Alert.alert('Erro', 'Não foi possível cadastrar o estoque!');
      //   console.log(error.response.data);
      //   setEstoqueData([]);
    }
  };
  return (
    <View style={styles.container}>
      <EstoqueList
        data={estoqueData}
        onSearch={onSearch}
        onPostEstoque={onPostEstoque}
        onRefresh={onRefresh}
        refreshing={refreshing}
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
