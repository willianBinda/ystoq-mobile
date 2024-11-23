import React from 'react';
import { DashboardIcon, Label, Pressable } from '../../atons';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AdminDrawerList } from '../../../types';

export default () => {
  const navigation = useNavigation<NavigationProp<AdminDrawerList>>();
  return (
    <>
      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <View style={styles.component}>
          <DashboardIcon />
        </View>
        <View style={styles.component}>
          <Label label="Dashboard" style={styles.label} />
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  component: {
    marginRight: 10,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  label: {
    // fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});
