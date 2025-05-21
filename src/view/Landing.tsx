import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, useWindowDimensions, ActivityIndicator, FlatList, TouchableOpacity, Image, Text } from "react-native";
import { NavigationType } from "../model/NavigationType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import APIAdapter from "../apiClient/APIAdapter";
import APIConstant from "../constant/APIConstant";
import CommonFunction from "../constant/CommonFunction";
import NavigationRoutes from "../constant/NavigationRoutes";
import LocalStore from "../storage/LocalStore";
import BaseStyle from "../constant/BaseStyle";
import Constants from "../constant/Constants";
import ImageSource from "../constant/ImageSource";
import AppColors from "../constant/Colors";

export const Landing = () => {
  const navigation = useNavigation<NavigationType>();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;



  //Fetch albums from API
  const fetchAlbums = async (): Promise<Album[]> => {
    var response = await APIAdapter.GET(
      APIConstant.kGetAlbumList,
    );

    setLoading(false);
    CommonFunction.printLogs('GetUserTransactions ApI:- ' + JSON.stringify(response));
    return response.data;
  };


  // Load albums from API or AsyncStorage
  useEffect(() => {
    const loadAlbums = async () => {
      try {
        const data = await fetchAlbums();
        setAlbums(data);
        // Save albums to AsyncStorage
        LocalStore.saveAlbumsToStorage(data);

      } catch (error) {
        const cachedAlbums = await LocalStore.getAlbumsFromStorage();
        // If API call fails, load from AsyncStorage
        setAlbums(cachedAlbums);
      } finally {
        setLoading(false);
      }
    };
    loadAlbums();
  }, []);


  return (
    <View style={styles.root}>
      <Text style={[BaseStyle.style.subheadingStyle, styles.headerTitle]}>{"Albums"}</Text>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.collectionId.toString()}
        numColumns={isLandscape ? 4 : 2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemFlatList}
            onPress={() => navigation.navigate(NavigationRoutes.albumDetails, { album: item })}
          >
            <Image
              source={{ uri: item.artworkUrl100 }}
              style={{ width: '100%', height: Constants.screenWidth * 0.4, borderRadius: 8 }}
            />
            <Text style={{ marginTop: Constants.marginTop, fontWeight: 'bold' }}>{item.collectionName}</Text>
          </TouchableOpacity>
        )}
      />
    </View >
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: Constants.marginTop,
  },
  itemFlatList: {
    flex: 1,
    margin: Constants.itemMargin,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: Constants.itemMargin,
  },
  headerTitle: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: AppColors.appWhite,
    height: Constants.screenHeight * 0.06,
    textAlignVertical: 'center'
  },



});
