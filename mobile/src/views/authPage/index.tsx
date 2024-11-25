import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Spinner } from '../../components/atons';
import { StyleSheet } from 'react-native';
import { getStoreData } from '../../actions';
import { Context } from '../../context/authContext';
export default () => {
  const { setToken, setLogged, setEmail, setAdminFlag } = useContext(Context);

  useEffect(() => {
    const velidToken = async () => {
      const data = await getStoreData();
      if (data !== null) {
        setLogged(false);
        setEmail(data.email);
        setToken(data.token);
        setAdminFlag(data.admin_flag);
      }
      setLogged(true);
    };
    velidToken();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <Spinner size="small" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
