// Index.ios.js - place code in here for iOS :)

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component - a JS function that returns some JSX

// const App = () => {
//   return (
//     <Text>Hello there!</Text>
//   );
// }

// shortened to...
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
