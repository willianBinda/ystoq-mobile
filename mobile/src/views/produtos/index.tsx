import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Copyright, ProdutoList } from '../../components/organisms';
import { useFocusEffect } from '@react-navigation/native';
import { getProdutos } from '../../utils/produtos';
import { ProdutoType } from '../../types';

export default () => {
  const [produtoList, setProdutoList] = useState<ProdutoType[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const setUp = async () => {
    try {
      const data = await getProdutos();
      setProdutoList(data);
    } catch (error) {}
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await setUp();
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
    }
  }, []);

  const onSearch = async (value: string = '') => {
    try {
      //   await setUpDataList(value);
      try {
        const data = await getProdutos(value);
        setProdutoList(data);
      } catch (error) {}
    } catch (error) {
      setProdutoList([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setUp();
    }, []),
  );

  return (
    <View style={styles.container}>
      <ProdutoList
        data={produtoList}
        onRefresh={onRefresh}
        onSearch={onSearch}
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
