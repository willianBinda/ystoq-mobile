import React, { ReactNode } from 'react';
import { Modal } from 'react-native';

interface Props {
  children: ReactNode;
  onVisible: () => void;
  modalVisible: boolean;
}

export default ({ children, onVisible, modalVisible }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onVisible}
    >
      {children}
    </Modal>
  );
};
