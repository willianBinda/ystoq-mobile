import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Copyright, EditarEstoque } from '../../../components/organisms';
import { useFocusEffect } from '@react-navigation/native';
import { getEstoqueId } from '../../../utils/novoEstoque';

export default ({ route }: { route: any }) => {
  const [editarEstoque, setEditarEstoque] = useState({
    descricao: '',
    quantidade: '',
    endereco: '',
  });

  const onChange = (name: string, value: string) => {
    setEditarEstoque((prevent) => {
      return {
        ...prevent,
        [name]: value,
      };
    });
  };
  useFocusEffect(
    useCallback(() => {
      const setUp = async () => {
        try {
          const response = await getEstoqueId(route.params.estoqueId);

          setEditarEstoque({
            descricao: response.descricao,
            quantidade: response.quantidade.toString(),
            endereco: response.endereco,
          });
        } catch (error) {
          //   console.log('erro');
        }
      };
      setUp();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );
  return (
    <View style={styles.container}>
      <EditarEstoque
        item={editarEstoque}
        onChange={onChange}
        estoqueId={route.params.estoqueId}
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
