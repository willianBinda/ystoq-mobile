// Defina os tipos das rotas que o seu app possui
export interface RootStackParamList {
  Register: undefined;
  Login: undefined;
  DrawerNavigator: undefined;
  // outras rotas, se houver
}

export interface AdminDrawerList {
  Dashboard: undefined;
  Estoque: undefined;
  Usuarios: undefined;
  Produtos: undefined;
  CategoriasProduto: undefined;
}
export interface AdminStackList {
  CadastrarEstoque: undefined;
  NovaSaida: undefined;
  NovaEntrada: undefined;
}

export interface EstoqueType {
  createdAt: string;
  descricao: string;
  endereco: string;
  id: number;
  id_empresa: number;
  quantidade: number;
  updatedAt: string;
}
