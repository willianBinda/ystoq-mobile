import React, { useContext } from 'react';
import { EditIcon, ListIcon, Pressable, RemoveIcon } from '../../atons';
import { MoveEstoqueIcon } from '../../atons/icons';
import { removerEstoque } from '../../../utils/removerItem';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AdminStackList } from '../../../types';
import { Context } from '../../../context/authContext';

export default ({ estoqueId }: { estoqueId: number }) => {
  const { state } = useContext(Context);
  const navigation = useNavigation<NavigationProp<AdminStackList>>();
  return (
    <>
      {state.adminFlag ? (
        <>
          <Pressable onPress={() => removerEstoque(estoqueId)}>
            <RemoveIcon />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate('EditarEstoque', {
                estoqueId,
              })
            }
          >
            <EditIcon />
          </Pressable>
        </>
      ) : null}

      <Pressable
        onPress={() =>
          navigation.navigate('ProdutosEstoque', {
            estoqueId,
          })
        }
      >
        <ListIcon />
      </Pressable>
      <Pressable
        onPress={() =>
          navigation.navigate('MovimentacaoEstoque', {
            estoqueId,
          })
        }
      >
        <MoveEstoqueIcon />
      </Pressable>
    </>
  );
};
