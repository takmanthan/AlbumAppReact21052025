/**
 * @format
 */

import React from "react";
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { AuthContext, AuthContextProvider } from './src/context/AuthContext';


export default Root = () => {
    return (
        <App></App>
    );
};

AppRegistry.registerComponent(appName, () => Root);
