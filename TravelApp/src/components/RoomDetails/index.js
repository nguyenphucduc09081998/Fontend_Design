import React from 'react';
import RoomDetailSlider from './slider';
import AppContainer from './main';
import Profile from '../Profile';


export default class RoomDetails extends React.Component {

  render() {
    return (
      <>
        <Profile></Profile>
        {/* <RoomDetailSlider></RoomDetailSlider> */}
        <AppContainer></AppContainer>
      </>
    );
  }
}

