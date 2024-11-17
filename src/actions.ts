import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://698a-177-75-132-100.ngrok-free.app',
});

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

const getStoreData = async (): Promise<{
  email: string;
  token: string;
  admin_flag: string;
} | null> => {
  try {
    const result = await AsyncStorage.getItem('userData');
    return result ? JSON.parse(result) : null;
  } catch (e) {
    // saving error
    return null;
  }
};

export { api, setStoreData, getStoreData, destroyStoreData };
