import React from 'react';
import { Label, List } from '../../atons';
import { RefreshControl, StyleSheet, Text, View } from 'react-native';
import { EstoqueType } from '../../../types';
import { EstoqueOptions, ListOptionsEstoque, SearchBar } from '../../molecules';

interface Props {
  data: EstoqueType[];
  onSearch: (value: string) => void;
  onPostEstoque: (body: any) => void;
  refreshing: boolean;
  onRefresh: () => void;
}

export default ({
  data,
  onSearch,
  onPostEstoque,
  refreshing,
  onRefresh,
}: Props) => {
  return (
    <>
      <View style={styles.header}>
        <EstoqueOptions onPostEstoque={onPostEstoque} />
      </View>
      <View style={styles.searchBar}>
        <SearchBar onSearch={onSearch} />
      </View>
      <List
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View style={styles.row}>
                <Label style={styles.label} label="Descrição " />
                <Label label={item.descricao} />
              </View>
              <View style={styles.row}>
                <Label style={styles.label} label="Endereço " />
                <Label label={item.endereco} />
              </View>
              <View style={styles.row}>
                <Label style={styles.label} label="Quantidade máxima " />
                <Label label={item.quantidade} />
              </View>
              <View style={styles.row}>
                <Label style={styles.label} label="Ações " />

                <View style={styles.icons}>
                  <ListOptionsEstoque />
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
  container: {
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
