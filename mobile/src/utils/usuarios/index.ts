import { axios } from '../../actions';

export const getUsuarios = async (search: string = '') => {
  const { data } = await axios.get('/usuario?search=' + search);
  return data;
};

export const cadastrarUsuario = async (body: any) => {
  await axios.post('cadastro-usuario', body);
};

export const removerUsuario = async (id: number) => {
  await axios.delete('usuario/' + id);
};

export const getUsuarioId = async (id: number) => {
  const { data } = await axios.get('usuario/' + id);
  return data;
};

export const atualizarUsuario = async (id: number, body: any) => {
  await axios.put('usuario/' + id, body);
};
