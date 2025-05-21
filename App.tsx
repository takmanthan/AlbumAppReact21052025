/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Fragment, useEffect, useMemo } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import CommonFunction from './src/constant/CommonFunction';
import NavigationRoutes from './src/constant/NavigationRoutes';
import { Landing } from './src/view/Landing';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppColors from './src/constant/Colors';
import SplashScreen from 'react-native-splash-screen';
import Constants from './src/constant/Constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AlbumDetails } from './src/view/AlbumDetails';


export const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {


  useEffect(() => {
    SplashScreen.hide();

    const bootstrapAsync = async () => {
      try {
        SplashScreen.hide();
      } catch (e) {
        CommonFunction.printLogs('Error' + e);
        // Restoring token failed
      }
    };
    bootstrapAsync();
  }, []);




  const screenOptions = useMemo(() => ({ headerShown: false }), []);
  // Stack Navigator for auth screens

  function AuthStack() {
    return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name={NavigationRoutes.dashboard}
          component={Landing}
          options={{
            title: '',
            headerShown: false,
            animationTypeForReplace: 'push',
          }}
        />

        <Stack.Screen name={NavigationRoutes.albumDetails} component={AlbumDetails} options={{ title: 'Album Details' }} />
      </Stack.Navigator>
    );
  }



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Fragment>
          {
            <NavigationContainer>
              {AuthStack()}
            </NavigationContainer>
          }
        </Fragment>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  headerContainer: {
    height: Constants.screenHeight * 0.08,
    backgroundColor: AppColors.appWhite,
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
