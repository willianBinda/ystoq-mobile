import { axios } from '../../actions';

export const getProdutos = async (search: string = '') => {
  const { data } = await axios.get('/produto?search=' + search);
  return data;
};

export const cadastrarProduto = async (body: any) => {
  await axios.post('/produto', body);
};

export const removerProduto = async (id: number) => {
  await axios.delete('produto/' + id);
};

export const atualizarProduto = async (id: number, body: any) => {
  await axios.put('/produto/' + id, body);
};

export const getProdutoId = async (id: number) => {
  const { data } = await axios.get('/produto/' + id);
  return data;
};

export const getCat = async (search: string = '') => {
  const { data } = await axios.get('/categoria-produto?search=' + search);
  return data;
};

export const removerCat = async (id: number) => {
  await axios.delete('/categoria-produto/' + id);
};

export const cadastrarCategoria = async (body: any) => {
  await axios.post('/categoria-produto', body);
};

export const getCatId = async (id: number) => {
  const { data } = await axios.get('/categoria-produto/' + id);
  return data;
};

export const atualizarCategoria = async (id: number, body: any) => {
  await axios.put('/categoria-produto/' + id, body);
};
