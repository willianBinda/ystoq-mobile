import React from 'react';
import { Label } from '../../atons';
import { StyleSheet } from 'react-native';

export default () => {
  return (
    <>
      <Label
        label="Copyright © 2024 Ystoq All rights reserved."
        style={styles.copy}
      />
    </>
  );
};

const styles = StyleSheet.create({
  copy: {
    textAlign: 'center',
  },
});
