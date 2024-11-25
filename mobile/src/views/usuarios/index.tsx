import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Copyright, UsuarioList } from '../../components/organisms';
import { useFocusEffect } from '@react-navigation/native';
import { getUsuarios } from '../../utils/usuarios';
import { Usuarios } from '../../types';

export default () => {
  const [usuarioList, setUsuarioList] = useState<Usuarios[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const setUp = async () => {
    try {
      const data: Usuarios[] = await getUsuarios();
      setUsuarioList(data);
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
        const data: Usuarios[] = await getUsuarios(value);
        setUsuarioList(data);
      } catch (error) {}
    } catch (error) {
      setUsuarioList([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setUp();
    }, []),
  );
  return (
    <View style={styles.container}>
      <UsuarioList
        data={usuarioList}
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
