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
  NovoProduto: undefined;
  NovoCat: undefined;
  EditarProduto: { produtoId: number };
  EditarCat: { catId: number };
  NovoUsuario: undefined;
  EditarUsuario: { usuarioId: number };
  CadastrarEstoque: undefined;
  NovaSaida: undefined;
  NovaEntrada: undefined;
  MovimentacaoEstoque: { estoqueId: number };
  EditarEstoque: { estoqueId: number };
  EditarMovimentacao: {
    estoqueId: number;
    movimentacaoId: number;
  };
  ProdutosEstoque: { estoqueId: number };
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

export interface EstoqueProdutoType {
  createdAt: string;
  estoque: {
    createdAt: string;
    descricao: string;
    endereco: string;
    id: number;
    id_empresa: number;
    quantidade: number;
    updatedAt: string;
  };
  id: number;
  id_estoque: number;
  id_produto: number;
  produto: {
    createdAt: string;
    descricao: string;
    id: number;
    id_categoria_produto: number;
    id_empresa: number;
    quantidade: number;
    updatedAt: string;
  };
  quantidade: number;
  updatedAt: string;
}

export interface MovimetacaoEstoqueType {
  createdAt: string;
  data: string;
  descricao: string;
  id: number;
  id_estoque: number;
  id_produto: number;
  produto: {
    createdAt: string;
    descricao: string;
    id: number;
    id_categoria_produto: number;
    id_empresa: number;
    quantidade: number;
    updatedAt: string;
  };
  quantidade: number;
  tipo: number;
  updatedAt: string;
}

export interface DadosEntradaType {
  createdAt: string;
  data: string;
  descricao: string;
  id: number;
  id_estoque: number;
  id_produto: number;
  produto: {
    createdAt: string;
    descricao: string;
    id: number;
    id_categoria_produto: number;
    id_empresa: number;
    quantidade: number;
    updatedAt: string;
  };
  quantidade: number;
  tipo: number;
  updatedAt: string;
}

export interface Usuarios {
  createdAt: string;
  deletedAt: null | string;
  email: string;
  flag_admin: boolean;
  id: number;
  id_empresa: number;
  nome: string;
  telefone: string;
  updatedAt: string;
}

export interface ProdutoType {
  categoria_produto: {
    createdAt: string;
    descricao: string;
    id: number;
    id_empresa: number;
    updatedAt: string;
  };
  createdAt: string;
  descricao: string;
  id: number;
  id_categoria_produto: number;
  id_empresa: number;
  quantidade: number;
  updatedAt: string;
}

export interface CatType {
  createdAt: string;
  descricao: string;
  id: number;
  id_empresa: number;
  updatedAt: string;
}
