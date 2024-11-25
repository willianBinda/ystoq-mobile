import { Alert } from 'react-native';
import { axios } from '../../actions';

export const onPostEstoque = async (body: any) => {
  // console.log(body);
  try {
    await axios.post('/estoque', { body });
    //   setEstoqueData(data);
    Alert.alert('Sucesso!', 'Estoque cadastrado com sucesso');
  } catch (error: any) {
    Alert.alert('Erro', 'Não foi possível cadastrar o estoque!');
    //   console.log(error.response.data);
    //   setEstoqueData([]);
  }
};

export const getEstoqueId = async (id: string) => {
  const { data } = await axios.get('/estoque/' + id);
  return data;
};

export const onPathEstoque = async (id: string, body: any) => {
  await axios.put('/estoque/' + id, body);
};
