import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const api = axios.create({
//   baseURL: 'https://39a6-177-75-132-37.ngrok-free.app',
// });

axios.defaults.baseURL = 'https://39a6-177-75-132-37.ngrok-free.app'; // Substitua pela URL do seu backend
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Adicione um interceptor para incluir o token em todas as requisições
axios.interceptors.request.use(
  async (config) => {
    const data = await getStoreData();
    if (data) {
      config.headers.Authorization = `Bearer ${data.token}`;
      config.headers.Email = `Bearer ${data.email}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const setStoreData = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('userData', jsonValue);
  } catch (e) {
    // saving error
  }
};

const destroyStoreData = async () => {
  try {
    await AsyncStorage.removeItem('userData');
  } catch (e) {
    // saving error
  }
};

const getStoreData = async (): Promise<any | null> => {
  try {
    const result = await AsyncStorage.getItem('userData');
    return result ? JSON.parse(result) : null;
  } catch (e) {
    // saving error
    return null;
  }
};

export { axios, setStoreData, getStoreData, destroyStoreData };
