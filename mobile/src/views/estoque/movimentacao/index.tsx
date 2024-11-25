import React, { useCallback, useContext, useState } from 'react';
import { Alert, RefreshControl, StyleSheet, View } from 'react-native';
import { Copyright } from '../../../components/organisms';
import {
  EditIcon,
  Label,
  List,
  Pressable,
  RemoveIcon,
} from '../../../components/atons';
import { MovimentacaoOptions, SearchBar } from '../../../components/molecules';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {
  getMovimentacaoEstoque,
  removerMovimentacao,
  searchMovimentacao,
} from '../../../utils/produtosEstoque';
import { AdminStackList, MovimetacaoEstoqueType } from '../../../types';
import moment from 'moment';
import { Context } from '../../../context/authContext';

export default ({ route }: { route: any }) => {
  const { state } = useContext(Context);
  const navigation = useNavigation<NavigationProp<AdminStackList>>();
  const [movimentacoes, setMovimentacoes] = useState<MovimetacaoEstoqueType[]>(
    [],
  );
  const [refreshing, setRefreshing] = React.useState(false);
  const setUp = async () => {
    try {
      const dados = await getMovimentacaoEstoque(route.params.estoqueId);

      setMovimentacoes(dados);
    } catch (error) {
      setMovimentacoes([]);
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

  const onSearch = async (value: string) => {
    // console.log('pesquisar');
    try {
      const dados = await searchMovimentacao(route.params.estoqueId, value);
      //   console.log(dados);
      setMovimentacoes(dados);
    } catch (error) {
      //   console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Label label="Movimentacao" />
      <View style={styles.header}>
        <MovimentacaoOptions />
      </View>
      <View style={styles.searchBar}>
        <SearchBar onSearch={onSearch} />
      </View>
      <List
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={movimentacoes}
        renderItem={({ item }: { item: MovimetacaoEstoqueType }) => {
          return (
            <View style={styles.containerList}>
              <View style={styles.row}>
                <Label style={styles.label} label="Produto " />
                <Label label={item.produto.descricao} />
              </View>
              <View style={styles.row}>
                <Label style={styles.label} label="Quatidade " />
                <Label label={item.quantidade.toString()} />
              </View>
              <View style={styles.row}>
                <Label style={styles.label} label="Tipo " />
                <Label label={item.tipo === 0 ? 'Entrada' : 'Saída'} />
              </View>
              <View style={styles.row}>
                <Label style={styles.label} label="Data Movimentação " />
                <Label label={moment(item.data).format('DD/MM/YYYY')} />
              </View>
              <View style={styles.row}>
                <Label style={styles.label} label="Descrição " />
                <Label label={item.descricao} />
              </View>
              {state.adminFlag ? (
                <View style={styles.row}>
                  <Label style={styles.label} label="Ações " />
                  <View style={styles.icons}>
                    <Pressable
                      onPress={async () => {
                        Alert.alert(
                          'Remover movimentação',
                          'Tem certeza que deseja excluir?',
                          [
                            {
                              text: 'Cancel',
                              style: 'cancel',
                            },
                            {
                              text: 'OK',
                              onPress: async () => {
                                try {
                                  await removerMovimentacao(item.id_estoque);
                                } catch (error) {
                                  //   console.log(error.message);
                                  Alert.alert(
                                    'ALerta!',
                                    'Não foi possível remover a moviemtnação de estoque!',
                                  );
                                }
                              },
                            },
                          ],
                        );
                      }}
                    >
                      <RemoveIcon />
                    </Pressable>

                    <Pressable
                      onPress={() =>
                        navigation.navigate('EditarMovimentacao', {
                          estoqueId: route.params.estoqueId,
                          movimentacaoId: item.id,
                        })
                      }
                    >
                      <EditIcon />
                    </Pressable>
                  </View>

                  <View style={styles.icons} />
                </View>
              ) : null}
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Label label="Sem dados para exibir" />}
        style={styles.list}
      />
      <Copyright />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    margin: 10,
    flex: 1,
  },
  containerList: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  list: {
    marginBottom: 5,
  },
  searchBar: {
    flexDirection: 'row',
    // borderWidth: 1,
    marginBottom: 5,
  },
  header: {
    // flex: 1,
    // borderWidth: 1,
    alignItems: 'center',
  },
});
