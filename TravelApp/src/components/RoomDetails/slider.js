import React from 'react';
//import react in project
import { StyleSheet, View, Text, Image } from 'react-native';
//import all the required component
import AppIntroSlider from 'react-native-app-intro-slider';


export default class RoomDetailSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }

  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 10, 
        }}>
        <Image style={styles.image} source={item.image} />
      </View>
    );
  };
  render() {
    //If false show the Intro Slides
    //Intro slides
    return (
      <View style={{ height: '35%' }}>
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          showNextButton={false}
          showDoneButton={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
 
const slides = [
  {
    key: 's1',
    image: require('./img/room2.jpg'),
  },
  {
    key: 's2',
    image: require('./img/room1.jpg'),
  },
  {
    key: 's3',
    image: require('./img/room3.jpg'),
  },
  {
    key: 's4',
    image: require('./img/room4.jpg'),
  },
  {
    key: 's5',
    image: require('./img/room5.jpg'),
  },
];