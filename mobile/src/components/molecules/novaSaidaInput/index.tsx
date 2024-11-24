import React, { useState } from 'react';
import { Input, Pressable, Select } from '../../atons';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Label from '../../atons/label';
import { format } from 'date-fns';
interface Props {
  onChange: (name: string, value: string | number) => void;
  estoqueList: {
    label: string;
    value: number;
  }[];
  produtoList: {
    label: string;
    value: number;
  }[];
  saidaEstoque: {
    id_estoque: number;
    id_produto: number;
    quantidade: number;
    data: string;
    descricao: string;
  };
}

export default ({
  onChange,
  estoqueList,
  saidaEstoque,
  produtoList,
}: Props) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    onChange('data', selectedDate);
    setOpen(false);
  };
  return (
    <>
      <View style={styles.select}>
        <Select
          initialValue="Estoque"
          data={estoqueList}
          selectedValue={saidaEstoque.id_estoque}
          onValueChange={(itemValue) => onChange('id_estoque', itemValue)}
        />
      </View>
      <View style={styles.select}>
        <Select
          initialValue="Produto"
          data={produtoList}
          selectedValue={saidaEstoque.id_produto}
          onValueChange={(itemValue) => onChange('id_produto', itemValue)}
        />
      </View>

      <Input
        placeholder="Quantidade (unidade)"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => onChange('quantidade', parseInt(text, 10))}
      />
      <View style={styles.select}>
        <Pressable onPress={() => setOpen(true)} style={styles.date}>
          <Label label={format(date, 'yyyy-MM-dd')} />
        </Pressable>
        <DatePicker
          maximumDate={new Date()}
          title={'Selecione uma data'}
          locale="pt"
          confirmText="Confirmar"
          cancelText="Cancelar"
          modal
          open={open}
          date={date}
          onConfirm={handleConfirm}
          onCancel={() => setOpen(false)}
          mode="date" // Inclui data e hora
        />
      </View>

      <Input
        placeholder="Descrição"
        style={styles.input}
        onChangeText={(text) => onChange('descricao', text)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  select: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  date: {
    padding: 10,
  },
});
