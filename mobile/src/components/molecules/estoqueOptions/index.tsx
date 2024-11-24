import React, { useState } from 'react';
import { Label, Pressable, Modal, Input, Select, InputMask } from '../../atons';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AdminStackList } from '../../../types';

interface Props {
  onPostEstoque: (body: any) => void;
}

export default ({ onPostEstoque }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [cadastrarEstoque, setCadastrarEstoque] = useState({
    descricao: '',
    quantidade: null,
    endereco: '',
  });

  const [saidaEstoque, setSaidaEstoque] = useState({
    id_estoque: null,
    id_produto: null,
    quantidade: null,
    tipo: '',
    data: '',
    descricao: '',
  });

  const onChange = (name: string, value: string | number) => {
    setCadastrarEstoque((prevent) => {
      return {
        ...prevent,
        [name]: value,
      };
    });
  };

  const onChange2 = (name: string, value: string | number) => {
    setSaidaEstoque((prevent) => {
      return {
        ...prevent,
        [name]: value,
      };
    });
  };

  const onVisible = () => {
    setModalVisible(!modalVisible);
  };

  const onVisible2 = () => {
    setModalVisible2(!modalVisible2);
  };

  const onVisible3 = () => {
    setModalVisible3(!modalVisible3);
  };
  const navigation = useNavigation<NavigationProp<AdminStackList>>();

  return (
    <>
      <View style={styles.title}>
        <Label label="Estoques" style={styles.label} />
      </View>

      <Pressable
        style={[styles.opt, styles.green]}
        onPress={() => navigation.navigate('CadastrarEstoque')}
      >
        <Label label="+ Cadastrar estoque" />
      </Pressable>

      <Pressable
        style={[styles.opt, styles.red]}
        onPress={() => navigation.navigate('NovaSaida')}
      >
        <Label label="+ Nova saída" />
      </Pressable>

      <Pressable
        style={[styles.opt, styles.green]}
        onPress={() => navigation.navigate('NovaEntrada')}
      >
        <Label label="+ Nova entrada" />
      </Pressable>

      <Modal modalVisible={modalVisible} onVisible={onVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Label style={styles.label} label="Cadastro de Estoque" />

            <Input
              placeholder="Descrição"
              style={styles.input}
              onChangeText={(text) => onChange('descricao', text)}
            />
            <Input
              placeholder="Quantidade máxima (unidade)"
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(text) =>
                onChange('quantidade', parseInt(text, 10))
              }
            />
            <Input
              placeholder="Endereco"
              style={styles.input}
              onChangeText={(text) => onChange('endereco', text)}
            />

            <View style={styles.footer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onVisible}
              >
                <Label style={styles.textStyle} label="Cancelar" />
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonCadastrar]}
                onPress={() => {
                  onPostEstoque(cadastrarEstoque);
                  onVisible();
                }}
                disabled={
                  !cadastrarEstoque.descricao ||
                  !cadastrarEstoque.endereco ||
                  !cadastrarEstoque.quantidade
                }
              >
                <Label style={styles.textStyle} label="Cadastrar" />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal modalVisible={modalVisible2} onVisible={onVisible2}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Label
              style={styles.label}
              label="Cadastro de Movimentação (Saída)"
            />

            <View style={styles.select}>
              <Select
                initialValue="Estoque"
                data={[{ label: 'java', value: 'java' }]}
                selectedValue={''}
                onValueChange={(itemValue) => console.log(itemValue)}
              />
            </View>
            <View style={styles.select}>
              <Select
                initialValue="Produto"
                data={[{ label: 'java', value: 'java' }]}
                selectedValue={''}
                onValueChange={(itemValue) => console.log(itemValue)}
              />
            </View>

            <Input
              placeholder="Quantidade (unidade)"
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(text) =>
                onChange2('quantidade', parseInt(text, 10))
              }
            />
            <View style={styles.select}>
              <InputMask
                placeholder="Data da movimentação"
                type={'datetime'}
                options={{
                  format: 'YYYY-DD-MM',
                }}
                onChangeText={(text) => {
                  console.log(text);
                }}
                keyboardType="numeric"
              />
            </View>

            <Input
              placeholder="Descrição"
              style={styles.input}
              onChangeText={(text) => onChange2('descricao', text)}
            />

            <View style={styles.footer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onVisible2}
              >
                <Label style={styles.textStyle} label="Cancelar" />
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonCadastrar]}
                onPress={() => {
                  //   onPostEstoque(cadastrarEstoque);
                  onVisible2();
                }}
                disabled={
                  !cadastrarEstoque.descricao ||
                  !cadastrarEstoque.endereco ||
                  !cadastrarEstoque.quantidade
                }
              >
                <Label style={styles.textStyle} label="Cadastrar" />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  title: {},
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 25,
    color: '#4F7598',
    textAlign: 'center',
  },
  opt: {
    padding: 10,
    marginBottom: 5,
    width: '100%',
    borderRadius: 10,
  },
  red: {
    backgroundColor: '#CD0000',
  },
  green: {
    backgroundColor: '#71C72A',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // borderWidth: 1,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#CD0000',
  },
  buttonCadastrar: {
    backgroundColor: '#5583AC',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  footer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
});
