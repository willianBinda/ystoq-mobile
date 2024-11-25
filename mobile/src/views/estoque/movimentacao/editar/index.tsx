import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Copyright } from '../../../../components/organisms';
import { Label, Pressable } from '../../../../components/atons';
import { EditarEntrada } from '../../../../components/molecules';
import { axios } from '../../../../actions';
import {
  getMovimentacaoEstoque,
  onPutMovimentacao,
} from '../../../../utils/produtosEstoque';
import { DadosEntradaType, MovimetacaoEstoqueType } from '../../../../types';
export default ({ route }: { route: any }) => {
  const [estoqueList, setEstoqueList] = useState([]);
  const [produtoList, setProdutoList] = useState<
    {
      value: number;
      label: string;
    }[]
  >([]);
  const [editarMovimentacao, setEditarMovimentacao] = useState({
    id_estoque: 0,
    id_produto: 0,
    quantidade: 0,
    tipo: '0',
    data: new Date(),
    descricao: '',
  });

  const onChange = (name: string, value: string | number) => {
    setEditarMovimentacao((prevent) => {
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
          const dados: MovimetacaoEstoqueType[] = await getMovimentacaoEstoque(
            route.params.estoqueId,
          );
          const dadosInput: DadosEntradaType | undefined = dados.find(
            (elemento) => elemento.id_estoque === route.params.estoqueId,
          );

          if (dadosInput) {
            setEditarMovimentacao({
              id_estoque: dadosInput.id_estoque,
              id_produto: dadosInput.id_produto,
              quantidade: dadosInput.quantidade,
              tipo: dadosInput.tipo.toString(),
              data: new Date(dadosInput.data),
              descricao: dadosInput.descricao,
            });
          }
        } catch (error) {}
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
              //   console.log(item);
              return {
                label: item.descricao,
                value: item.id,
              };
            }),
          );
        } catch (error) {}
      };
      setUp();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <View style={styles.containerView}>
      <View style={styles.container}>
        <Label style={styles.label} label="Edição de Movimentação (Entrada)" />
        <EditarEntrada
          onChange={onChange}
          estoqueList={estoqueList}
          saidaEstoque={editarMovimentacao}
          produtoList={produtoList}
        />
        <Pressable
          style={[styles.button, styles.buttonCadastrar]}
          onPress={() => {
            try {
              onPutMovimentacao(route.params.estoqueId, editarMovimentacao);
              Alert.alert(
                'Sucesso!',
                'Movimentação de estoque atualizada com sucesso!',
              );
            } catch (error) {
              Alert.alert(
                'Erro!',
                'Não foi possível atualizar a movimentação de estoque!',
              );
            }
            // console.log('editando');
            // onPostEstoqueEntrada();
          }}
        >
          <Label style={styles.textStyle} label="Editar" />
        </Pressable>
      </View>

      <Copyright />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    // borderWidth: 1,
    margin: 15,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 25,
    color: '#4F7598',
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonCadastrar: {
    backgroundColor: '#5583AC',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
