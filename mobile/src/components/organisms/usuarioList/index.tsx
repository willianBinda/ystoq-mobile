import React from 'react';
import { EditIcon, Label, List, Pressable, RemoveIcon } from '../../atons';
import { Alert, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { AdminStackList, Usuarios } from '../../../types';
import { SearchBar } from '../../molecules';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { removerUsuario } from '../../../utils/usuarios';

interface Props {
  data: Usuarios[];
  onSearch: (value: string) => void;
  refreshing: boolean;
  onRefresh: () => void;
}

export default ({ data, onSearch, refreshing, onRefresh }: Props) => {
  const navigation = useNavigation<NavigationProp<AdminStackList>>();
  return (
    <>
      {/* <View style={styles.header}>
        <EstoqueOptions onPostEstoque={onPostEstoque} />
      </View> */}
      <View>
        <Label label="Usuários" style={styles.title} />
      </View>
      <View>
        <Pressable
          style={styles.opt}
          onPress={() => navigation.navigate('NovoUsuario')}
        >
          <Label label="+ Novo usuário" />
        </Pressable>
      </View>

      <View style={styles.searchBar}>
        <SearchBar onSearch={onSearch} />
      </View>
      <List
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={data}
        renderItem={({ item }: { item: Usuarios }) => {
          return (
            <View style={styles.container}>
              <View style={styles.row}>
                <Label style={styles.label} label="Nome " />
                <Label label={item.nome} />
              </View>
              <View style={styles.row}>
                <Label style={styles.label} label="Email " />
                <Label label={item.email} />
              </View>
              <View style={styles.row}>
                <Label style={styles.label} label="Telefone " />
                <Label label={item.telefone} />
              </View>
              <View style={styles.row}>
                <Label style={styles.label} label="Ações " />
                <View style={styles.icons}>
                  <Pressable
                    onPress={() => {
                      Alert.alert(
                        'Remover usuário',
                        'Deseja remover este usuário?',
                        [
                          {
                            text: 'Cancel',

                            style: 'cancel',
                          },
                          {
                            text: 'OK',
                            onPress: () => {
                              try {
                                removerUsuario(item.id);
                                onRefresh();
                                // Alert.alert("Suce!","Não foi possível remover este usuário!")
                              } catch (error) {
                                Alert.alert(
                                  'Erro!',
                                  'Não foi possível remover este usuário!',
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
                      navigation.navigate('EditarUsuario', {
                        usuarioId: item.id,
                      })
                    }
                  >
                    <EditIcon />
                  </Pressable>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Sem dados para exibir</Text>}
        style={styles.list}
      />
    </>
  );
};

const styles = StyleSheet.create({
  opt: {
    padding: 10,
    marginBottom: 5,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#71C72A',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 25,
    color: '#4F7598',
    textAlign: 'center',
  },
  container: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
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
