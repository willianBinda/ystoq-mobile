import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Copyright } from '../../components/organisms';
import { useFocusEffect } from '@react-navigation/native';
import { getCat } from '../../utils/produtos';
import { CatType } from '../../types';
import CategoriaList from '../../components/organisms/categoriaList';

export default () => {
  const [catList, setCatList] = useState<CatType[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const setUp = async () => {
    try {
      const data = await getCat();
      setCatList(data);
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
        const data = await getCat(value);
        setCatList(data);
      } catch (error) {}
    } catch (error) {
      setCatList([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setUp();
    }, []),
  );

  return (
    <View style={styles.container}>
      <CategoriaList
        data={catList}
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
