/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { RoomDetails, FilterRoom } from './src/components';



// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

const App: () => React$Node = () => {
  return (
    <>
    <RoomDetails></RoomDetails>
    {/* <FilterRoom></FilterRoom> */}
    </>
  );
};


export default App;
