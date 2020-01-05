import React from 'react';
import RoomDetailSlider from './slider';
import AppContainer from './main';

export default class RoomDetails extends React.Component {

  render() {
    return (
      <>
      <RoomDetailSlider></RoomDetailSlider>
      <AppContainer></AppContainer>
    </>
    );
  }
}

