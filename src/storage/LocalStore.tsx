import AsyncStorage from '@react-native-async-storage/async-storage';


const LocalStore = {

  // Save albums to AsyncStorage
  saveAlbumsToStorage: async (albums: Album[]): Promise<void> => {
    try {
      await AsyncStorage.setItem('albums', JSON.stringify(albums));
    } catch (e) {
      console.error('Error saving albums:', e);
    }
  },

  // Get albums from AsyncStorage
  getAlbumsFromStorage: async (): Promise<Album[]> => {
    try {
      const albums = await AsyncStorage.getItem('albums');
      return albums ? JSON.parse(albums) : [];
    } catch (e) {
      console.error('Error reading albums:', e);
      return [];
    }
  },

  SaveData: async function (key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e: any) {
      // saving error
      console.log(e.message);
    }
  },
  clearAllData: async function () {
    try {
      await AsyncStorage.clear();
    } catch (e: any) {
      // saving error
      console.log(e.message);
    }
  },
  clearAll: async function () {
    try {
      await AsyncStorage.clear();
    } catch (e: any) {
      // saving error
      console.log(e.message);
    }
  },

  LoadData: async function (key: string) {
    console.log('entered for read local data');

    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return value;
      }
    } catch (e: any) {
      // error reading value
      console.log(e.message);
    }
  },
};

export default LocalStore;
