import { Alert } from 'react-native';
import { axios } from '../../actions';
export const onDeleteEstoque = async (id: number) => {
  // console.log(body);
  try {
    await axios.delete('/estoque/' + id);
    Alert.alert(
      'Sucesso!',
      'Estoque removido com sucesso! Atualize a lista de estoques!',
    );
  } catch (error: any) {
    Alert.alert('Alerta!', 'Não foi possível remover o estoque!');
  }
};

export const removerEstoque = (estoqueId: number) => {
  Alert.alert('Remover Item', 'Tem certeza que deseja excluir?', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    { text: 'OK', onPress: () => onDeleteEstoque(estoqueId) },
  ]);
};
