import React, { useCallback, useState } from 'react';
import { Alert, RefreshControl, StyleSheet, View } from 'react-native';
import { Label, List } from '../../../components/atons';
import { Copyright } from '../../../components/organisms';
import { useFocusEffect } from '@react-navigation/native';
import { getProdutosEstoque } from '../../../utils/produtosEstoque';
import { EstoqueProdutoType } from '../../../types';

export default ({ route }: { route: any }) => {
  const [produtos, setProdutos] = useState<EstoqueProdutoType[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const setUp = async () => {
    try {
      const dados = await getProdutosEstoque(route.params.estoqueId);
      setProdutos(dados);
    } catch (error) {
      setProdutos([]);
      Alert.alert('Alerta!', 'Não foi possível listar os produtos do estoque.');
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    try {
      setUp();
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(
    useCallback(() => {
      setUp();
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );
  return (
    <View style={styles.container}>
      <Label style={styles.header} label="Produtos no Estoque" />
      <List
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={produtos}
        renderItem={({ item }: { item: EstoqueProdutoType }) => {
          return (
            <View style={styles.containerRow}>
              <View style={styles.row}>
                <Label style={styles.label} label="Descrição " />
                <Label label={item.produto.descricao} />
              </View>
              <View style={styles.row}>
                <Label style={styles.label} label="Quantidade do produto:" />
                <Label label={item.quantidade.toString()} />
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Label label="Sem dados para exibir!" />}
        style={styles.list}
      />
      <Copyright />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  containerRow: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 25,
    color: '#4F7598',
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
  row: {
    // alignItems: 'center',
  },
  list: {
    marginBottom: 5,
  },
});
