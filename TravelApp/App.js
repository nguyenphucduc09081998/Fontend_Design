/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { RoomDetails, ContentMore, CalendarsScreen } from './src/components';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


class TomTat extends React.Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
        <>
        <View style={styles.titleHotel}>
          <Text h4 style={{fontFamily: 'serif', fontWeight: '700'}}>Mường Thanh Luxury Apartment</Text> 
          <Text>
              <Image source={require('./img/location.png')}
              style={styles.imgInfo} />   <Text style={styles.moreInfo}>Ngũ Hành Sơn, Đà Nẵng, Việt Nam</Text>
          </Text>
          <Text>
              <Image source={require('./img/home.png')}
              style={styles.imgInfo} />   <Text style={styles.moreInfo}>Căn hộ chung cư · 65 m2</Text>
          </Text>
          <Text style={styles.descriptInfo} >Nguyên căn · 2 phòng tắm · 2 giường · 6 khách (tối đa 6 khách)</Text>
          <Text style={{ fontSize: 12, color: '#373737', marginTop: 10}} >Giới thiệu tổng quan</Text>
          <Text style={{ fontSize: 12, color: '#6A6767', marginTop: 6}} >
            Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, sẽ mang đến cho du khách một không gian sang trọng, quý phái,... 
          </Text>
          <Text style={{ fontSize: 12, color: '#F65E39', marginTop: 8, textDecorationLine: 'underline',}} >Xem thêm</Text>
        </View>

        <View style={styles.titleHotel}>
            <Text h4 style={{ color: '#A19F9F', fontWeight: '700', fontFamily: 'serif' }}>Wifi Miễn Phí</Text>
        </View>

        <View style={styles.titleHotel}>
            <Text h4 style={{ color: '#A19F9F', fontWeight: '700', fontFamily: 'serif' }}>Cơ Sở Vật Chất</Text>
        </View>
        
        <View style={{marginTop: 0}}>
          <Modal 
            style={styles.modal}
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            >
            <View  style={{
              backgroundColor:'transparent',
              flex:1,
              justifyContent:'flex-end'
                  }}>
              
              <View style={{
                    backgroundColor:'white',
                    width: '100%',
                    borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#ddd',
                        borderBottomWidth: 0,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 1,
                        marginRight: 5,
                        marginTop: 20,
                        marginBottom: 5,
                        height: 370
                  }}>
                <ContentMore></ContentMore>
                
                <View style={{ flex: 1, flexDirection: 'row', marginLeft: 50}}>
                    <View style={{width: '50%', paddingTop: 0, marginTop: 0}}>
                        <TouchableHighlight
                        style={styles.buttonBack}
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text style={{color: 'white',fontFamily: 'serif', fontSize: 15, fontWeight: '700', cursor: 'pointer'}}>Trở Lại</Text>
                      </TouchableHighlight>
                    </View>
                    <View style={{width: '50%', paddingTop: 0, marginTop: 0}}>
                    <TouchableHighlight
                      style={styles.button}>
                      <Text style={{color: 'white',fontFamily: 'serif', fontSize: 15, fontWeight: '700', cursor: 'pointer'}}>Đặt Ngay</Text>
                    </TouchableHighlight>
                  </View>
                </View>
               
              </View>
            </View>
          </Modal>

          <View style={{
                        flex: 1, flexDirection: 'row', paddingLeft: 10, borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#ddd',
                        borderBottomWidth: 0,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 1,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 20,
                        marginBottom: 5,
                        height: 60}}>
            <View style={{width: '63%', paddingTop: 20, paddingLeft: 10, }}>
            <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 20, color: '#3E3C3C'}}>1,800,000₫ <Text style={{fontSize: 13, color: '#696666'}}>(1 đêm)</Text></Text>
            </View>
            <View style={{width: '37%', paddingTop: 0, marginTop: 0}}>
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  this.setModalVisible(true);
                }}>
                <Text style={{color: 'white',fontFamily: 'serif', fontSize: 15, fontWeight: '700', cursor: 'pointer'}}>Đặt Ngay</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        </>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

class TienNghi extends React.Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
        <>
        <View style={styles.titleHotel}>
          <Text style={{ fontSize: 12, color: '#6A6767', marginTop: 6}} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan bibendum tincidunt. Praesent quis consectetur ipsum. Sed faucibus dolor et ante hendrerit condimentum. 
          </Text>
          <Text style={{ fontSize: 12, color: '#F65E39', marginTop: 8, textDecorationLine: 'underline',}} >Xem thêm</Text>
        </View>

        <View style={styles.titleHotel}>
            <Text h4 style={{ color: '#A19F9F', fontWeight: '700', fontFamily: 'serif' }}>Tiện nghi phòng</Text>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility A</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility B</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility C</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility D</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility E</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility F</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility M</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility N</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Facility P</Text>
                </Text>
              </View>
            </View>
        </View>

        <View style={styles.titleHotel}>
            <Text h4 style={{ color: '#A19F9F', fontWeight: '700', fontFamily: 'serif' }}>Tiện nghi giải trí</Text>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí A</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí B</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí C</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí D</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí E</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí F</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí M</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí N</Text>
                </Text>
              </View>
              <View  style={{width:'30%'}}>
                <Text>
                  <Image source={require('./img/check_1.png')}
                  style={styles.imgInfo} />   <Text style={styles.moreInfo}>Giải trí P</Text>
                </Text>
              </View>
            </View>
        </View>
        
        <View style={{marginTop: 0}}>
          <Modal 
            style={styles.modal}
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            >
            <View  style={{
              backgroundColor:'transparent',
              flex:1,
              justifyContent:'flex-end'
                  }}>
              
              <View style={{
                    backgroundColor:'white',
                    width: '100%',
                    borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#ddd',
                        borderBottomWidth: 0,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 1,
                        marginRight: 5,
                        marginTop: 20,
                        marginBottom: 5,
                        height: 370
                  }}>
                <ContentMore></ContentMore>
                
                <View style={{ flex: 1, flexDirection: 'row', marginLeft: 50}}>
                    <View style={{width: '50%', paddingTop: 0, marginTop: 0}}>
                        <TouchableHighlight
                        style={styles.buttonBack}
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text style={{color: 'white',fontFamily: 'serif', fontSize: 15, fontWeight: '700', cursor: 'pointer'}}>Trở Lại</Text>
                      </TouchableHighlight>
                    </View>
                    <View style={{width: '50%', paddingTop: 0, marginTop: 0}}>
                    <TouchableHighlight
                      style={styles.button}>
                      <Text style={{color: 'white',fontFamily: 'serif', fontSize: 15, fontWeight: '700', cursor: 'pointer'}}>Đặt Ngay</Text>
                    </TouchableHighlight>
                  </View>
                </View>
               
              </View>
            </View>
          </Modal>

          <View style={{
                        flex: 1, flexDirection: 'row', paddingLeft: 10, borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#ddd',
                        borderBottomWidth: 0,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 1,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 20,
                        marginBottom: 5,
                        height: 60}}>
            <View style={{width: '63%', paddingTop: 20, paddingLeft: 10, }}>
            <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 20, color: '#3E3C3C'}}>1,800,000₫ <Text style={{fontSize: 13, color: '#696666'}}>(1 đêm)</Text></Text>
            </View>
            <View style={{width: '37%', paddingTop: 0, marginTop: 0}}>
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  this.setModalVisible(true);
                }}>
                <Text style={{color: 'white',fontFamily: 'serif', fontSize: 15, fontWeight: '700', cursor: 'pointer'}}>Đặt Ngay</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        </>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

class GiaVaDatLich extends React.Component {

  state = {
    modalVisible: false,
      tableData: [
        ['Thứ hai - Thứ năm', '1,600,000đ'],
        ['Thứ sáu- Chủ nhật', '1,700,000đ'],
        ['Phí khách tăng thêm', '100,000đ (sau 6 khách)'],
        ['Số đêm tối thiểu', '1 đêm'],
      ],
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
        <>
        <View style={styles.titleHotel}>
          <Text h4 style={{fontFamily: 'serif', fontWeight: '700'}}>Giá Phòng</Text> 
          <Text style={{ fontSize: 12, color: '#6A6767', marginTop: 10}} >Giá có thể tăng vào cuối tuần hoặc ngày lễ</Text>
          <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Rows data={this.state.tableData} textStyle={styles.text}/>
            </Table>
          </View>
          <Text style={{ fontSize: 12, color: '#F65E39', marginTop: 8, textDecorationLine: 'underline',}} >Xem thêm</Text>
        </View>

        <View style={styles.titleHotel}>
            <Text h4 style={{ color: '#A19F9F', fontWeight: '700', fontFamily: 'serif' }}>Availability</Text>
            {/* <CalendarList
            style={{
            borderWidth: 1,
            borderColor: 'gray',
            height: 236,
            width: 255,
            fontSize: 14, 
            marginTop: 15
          }}
          
          
            // Enable horizontal scrolling, default = false
            horizontal={true}
            // Enable paging on horizontal, default = false
            pagingEnabled={true}
            // Set custom calendarWidth.
            calendarWidth={300}
          /> */}
          <CalendarsScreen></CalendarsScreen>
        </View>

        
        <View style={{marginTop: 0}}>
          <Modal 
            style={styles.modal}
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            >
            <View  style={{
              backgroundColor:'transparent',
              flex:1,
              justifyContent:'flex-end'
                  }}>
              
              <View style={{
                    backgroundColor:'white',
                    width: '100%',
                    borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#ddd',
                        borderBottomWidth: 0,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 1,
                        marginRight: 5,
                        marginTop: 20,
                        marginBottom: 5,
                        height: 370
                  }}>
                <ContentMore></ContentMore>
                
                <View style={{ flex: 1, flexDirection: 'row', marginLeft: 50}}>
                    <View style={{width: '50%', paddingTop: 0, marginTop: 0}}>
                        <TouchableHighlight
                        style={styles.buttonBack}
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text style={{color: 'white',fontFamily: 'serif', fontSize: 15, fontWeight: '700', cursor: 'pointer'}}>Trở Lại</Text>
                      </TouchableHighlight>
                    </View>
                    <View style={{width: '50%', paddingTop: 0, marginTop: 0}}>
                    <TouchableHighlight
                      style={styles.button}>
                      <Text style={{color: 'white',fontFamily: 'serif', fontSize: 15, fontWeight: '700', cursor: 'pointer'}}>Đặt Ngay</Text>
                    </TouchableHighlight>
                  </View>
                </View>
               
              </View>
            </View>
          </Modal>

          <View style={{
                        flex: 1, flexDirection: 'row', paddingLeft: 10, borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#ddd',
                        borderBottomWidth: 0,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 1,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 20,
                        marginBottom: 5,
                        height: 60}}>
            <View style={{width: '63%', paddingTop: 20, paddingLeft: 10, }}>
            <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 20, color: '#3E3C3C'}}>1,800,000₫ <Text style={{fontSize: 13, color: '#696666'}}>(1 đêm)</Text></Text>
            </View>
            <View style={{width: '37%', paddingTop: 0, marginTop: 0}}>
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  this.setModalVisible(true);
                }}>
                <Text style={{color: 'white',fontFamily: 'serif', fontSize: 15, fontWeight: '700', cursor: 'pointer'}}>Đặt Ngay</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        </>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator  = createMaterialTopTabNavigator(
  {
  'Tóm Tắt': TomTat,
  'Tiện Nghi': TienNghi,
  'Giá & Đặt Lịch': GiaVaDatLich,
  'Đánh Giá': SettingsScreen,
  },
  {
    tabBarOptions: {
      pressColor: Colors.dark,
      labelStyle: {
        fontSize: 11,
        color: '#464646',
        fontWeight: '700',
        fontFamily: 'Lora',
      },
      tabStyle: {
        width: 100,
      },
      style: {
        backgroundColor: 'white',
        
      },
      activeTintColor:'orange',
      upperCaseLabel:false,
    }
  }
);

const AppContainer = createAppContainer(TabNavigator );

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

const App: () => React$Node = () => {
  return (
    <>
    <RoomDetails></RoomDetails>
    <AppContainer />
    </>
  );
};

const styles = StyleSheet.create({
  titleHotel: {
    marginLeft: 10,
    marginTop: 10,
    width: 395,
    borderBottomWidth: 0.5,
    borderBottomColor: '#8A8383',
    paddingBottom: 13,
    fontFamily: 'serif'
  },
  moreInfo: {
    fontSize: 10,
    color: '#696666',
    marginTop: 10

  },
  descriptInfo: {
    fontSize: 13,
    color: '#373737',
    marginTop: 10
  },
  imgInfo: {
    width: 12, 
    height: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(234, 12, 65, 0.84)',
    padding: 5,
    width: 125,
    height: 32,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonBack: {
    alignItems: 'center',
    backgroundColor: '#07a',
    padding: 5,
    width: 125,
    height: 32,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {paddingLeft: 0, paddingRight: 10, paddingTop: 20, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff', fontFamily: 'serif' },
  text: { margin: 6, textAlign: 'center', fontFamily: 'serif' },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
