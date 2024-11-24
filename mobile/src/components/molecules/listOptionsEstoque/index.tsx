import React from 'react';
import { EditIcon, ListIcon, Pressable, RemoveIcon } from '../../atons';
import { MoveEstoqueIcon } from '../../atons/icons';

export default () => {
  return (
    <>
      <Pressable onPress={() => console.log('removendo item')}>
        <RemoveIcon />
      </Pressable>
      <Pressable onPress={() => console.log('editar item')}>
        <EditIcon />
      </Pressable>
      <Pressable onPress={() => console.log('editar item')}>
        <ListIcon />
      </Pressable>
      <Pressable onPress={() => console.log('editar item')}>
        <MoveEstoqueIcon />
      </Pressable>
    </>
  );
};
