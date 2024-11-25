import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const DashboardIcon = () => {
  return <Icon name="bar-chart" size={30} color="black" />;
};

export const SignOutIcon = () => {
  return <Icon name="sign-out" size={30} color="black" />;
};

export const EstoqueIcon = () => {
  return <Icon name="dropbox" size={30} color="black" />;
};

export const RemoveIcon = () => {
  return <Icon name="trash-o" size={25} color="red" />;
};

export const EditIcon = () => {
  return <Icon name="edit" size={25} color="blue" />;
};

export const ListIcon = () => {
  return <Icon name="list" size={25} color="blue" />;
};

export const ListDrawerIcon = () => {
  return <Icon name="list" size={25} color="black" />;
};

export const MoveEstoqueIcon = () => {
  return <Icon name="table" size={25} color="blue" />;
};

export const ProdutoIcon = () => {
  return <Icon name="table" size={25} color="black" />;
};

export const SearchIcon = () => {
  return <Icon name="search" size={25} color="gray" />;
};

export const UsersIcon = () => {
  return <Icon name="users" size={25} color="black" />;
};

export const EyeIcon = ({ type }: { type: string }) => {
  return <Icon name={type} size={25} color="black" />;
};
