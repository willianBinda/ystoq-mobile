import { axios } from '../../actions';

export const getProdutosEstoque = async (id: string) => {
  const { data } = await axios.get('/estoque-produto/' + id);
  return data;
};

export const getDetalhesEstoque = async (id: string) => {
  const { data } = await axios.get('/detalhes-estoque/' + id);
  return data;
};

export const getMovimentacaoEstoque = async (id_estoque: string) => {
  const { data } = await axios.get('/movimentacoes-estoque/' + id_estoque);
  return data;
};

export const removerMovimentacao = async (estoqueId: number) => {
  await axios.delete('movimentacao-estoque/' + estoqueId);
};

export const getCatProdutoId = async () => {
  const { data } = await axios.get('/categoria-produto');
  return data;
};

export const getProdutoId = async (id: number) => {
  const { data } = await axios.get('/produto/' + id);
  return data;
};

export const onPutMovimentacao = async (id: string, body: any) => {
  await axios.put('movimentacao-estoque/' + id, body);
};

export const searchMovimentacao = async (id: string, search: string) => {
  const { data } = await axios.get(
    'movimentacoes-estoque/' + id + '?search=' + search,
  );
  return data;
};
