/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { RoomDetails, FilterRoom, HomeScreen, BottomTabs, Payment } from './src/components';



// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

const App: () => React$Node = () => {
  return (
    <>
    {/* <RoomDetails></RoomDetails> */}
    {/* <FilterRoom></FilterRoom> */}
    {/* <HomeScreen></HomeScreen> */}
    <BottomTabs></BottomTabs>
    {/* <Payment></Payment> */}
    </>
  );
};


export default App;
