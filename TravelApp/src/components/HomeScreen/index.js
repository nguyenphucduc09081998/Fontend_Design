import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View, Image,
  CheckBox,
  TouchableHighlight
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import ModalFilterView from './modal';
export {
  ModalFilterView,
};

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date:"2016-05-15"}
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        <View>
            <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '600'}}>Điểm đến phổ biến</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginLeft: 10}}>
              <View style={{width: '46%', marginRight: 10}}>
                <Image source={require('./img/hochiminh.webp')}
                        style={styles.imgHot} />
                <Text style={styles.imgText}>Hồ Chí Minh</Text>
              </View>
              <View style={{width: '46%', marginRight: 10}}>
              <Image source={require('./img/hochiminh.webp')}
                      style={styles.imgHot} />
                <Text style={styles.imgText}>Hà Nội</Text>
              </View>
              <View style={{width: '46%', marginRight: 10}}>
                <Image source={require('./img/hochiminh.webp')}
                        style={styles.imgHot} />
                  <Text style={styles.imgText}>Hội An</Text>
              </View>
              <View style={{width: '46%', marginRight: 10}}>
                <Image source={require('./img/hochiminh.webp')}
                        style={styles.imgHot} />
                  <Text style={styles.imgText}>Phú Quốc</Text>
              </View>
            </View>
            <View style={styles.borderBot}></View>
        </View>
        
          
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Text style={{fontSize: 15, fontWeight: '600'}}>Địa điểm hot nhất</Text>
          <Text style={{fontSize: 10, color: '#929191' }}>Tận hưởng không gian sống tuyệt vời tại thương hiệu đô thị hàng đầu Việt Nam
</Text>
          <View style={{flexDirection: 'row', flexWrap: "wrap"}}>
            <View style={{         
                          marginRight: 10,
                          width: '47%'
                          }}>
              <View style={{}}>
              <Image source={require('./img/room2.jpg')}
                      style={styles.imgInfo} />
              </View>
              <View style={{ marginTop: 10}}>
                <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11.5, color: '#1B51DA',}}>Mường Thanh Luxury Apartment</Text>
                <Text style={styles.moreInfo}>10 khách · 2 phòng ngủ · 2 phòng tắm</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  <View style={{width: '70%'}}>
                    <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,800,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
                  </View>
                  <View style={{width: '30%'}}>
                    <TouchableHighlight
                      style={styles.buttonStar}
                      >
                      <Text style={{color: '#fff',fontFamily: 'serif', fontSize: 9, fontWeight: '700'}}>4.5 Star</Text>
                    </TouchableHighlight>
                  </View>
                </View>
                
                <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
              </View>
            </View>

            <View style={{         
                          marginRight: 10,
                          width: '47%'
                          }}>
              <View style={{}}>
              <Image source={require('./img/room3.jpg')}
                      style={styles.imgInfo} />
              </View>
              <View style={{ marginTop: 10}}>
                <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11.5, color: '#1B51DA',}}>Hoàn Kiếm Luxury Home</Text>
                <Text style={styles.moreInfo}>10 khách · 2 phòng ngủ · 2 phòng tắm</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  <View style={{width: '70%'}}>
                    <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,800,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
                  </View>
                  <View style={{width: '30%'}}>
                    <TouchableHighlight
                      style={styles.buttonStar}
                      >
                      <Text style={{color: '#fff',fontFamily: 'serif', fontSize: 9, fontWeight: '700'}}>4.5 Star</Text>
                    </TouchableHighlight>
                  </View>
                </View>
                
                <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
              </View>
            </View>

            <View style={{         
                          marginRight: 10,
                          width: '47%'
                          }}>
              <View style={{}}>
              <Image source={require('./img/room4.jpg')}
                      style={styles.imgInfo} />
              </View>
              <View style={{ marginTop: 10}}>
                <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11.5, color: '#1B51DA',}}>Noble Apartment Studio - Silver</Text>
                <Text style={styles.moreInfo}>10 khách · 2 phòng ngủ · 2 phòng tắm</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  <View style={{width: '70%'}}>
                    <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,800,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
                  </View>
                  <View style={{width: '30%'}}>
                    <TouchableHighlight
                      style={styles.buttonStar}
                      >
                      <Text style={{color: '#fff',fontFamily: 'serif', fontSize: 9, fontWeight: '700'}}>4.5 Star</Text>
                    </TouchableHighlight>
                  </View>
                </View>
                
                <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
              </View>
            </View>
            
            <View style={{         
                          marginRight: 10,
                          width: '47%'
                          }}>
              <View style={{}}>
              <Image source={require('./img/room5.jpg')}
                      style={styles.imgInfo} />
              </View>
              <View style={{ marginTop: 10}}>
                <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11.5, color: '#1B51DA',}}>Luxury Apartment - The Golden</Text>
                <Text style={styles.moreInfo}>10 khách · 2 phòng ngủ · 2 phòng tắm</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  <View style={{width: '70%'}}>
                    <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,800,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
                  </View>
                  <View style={{width: '30%'}}>
                    <TouchableHighlight
                      style={styles.buttonStar}
                      >
                      <Text style={{color: '#fff',fontFamily: 'serif', fontSize: 9, fontWeight: '700'}}>4.5 Star</Text>
                    </TouchableHighlight>
                  </View>
                </View>
                
                <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
              </View>
            </View>
          </View>

            <View style={{paddingTop: 0, marginTop: 0, marginLeft: '30%'}}>
              <TouchableHighlight
                style={styles.button}
                >
                <Text style={{color: '#292929',fontFamily: 'serif', fontSize: 10, fontWeight: '700'}}>Xem thêm</Text>
              </TouchableHighlight>
            </View>
        </View>


        <View style={{marginTop: 15, marginLeft: 10, }}>
          <Text style={{fontSize: 15, fontWeight: '600'}}>Đề xuất cho bạn</Text>
          <Text style={{fontSize: 10, color: '#929191' }}>Tận hưởng không gian sống tuyệt vời tại thương hiệu đô thị hàng đầu Việt Nam
</Text>
          <View style={{flexDirection: 'row',          
                        marginRight: 5,
                
                        }}>
            <View style={{width: '40%'}}>
            <Image source={require('./img/room2.jpg')}
                    style={styles.imgSuggest} />
            </View>
            <View style={{width: '60%', marginLeft: 15, marginTop: 10}}>
              <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11.5, color: '#1B51DA',}}>Mường Thanh Luxury Apartment</Text>
              <Text>
                <Image source={require('./img/location.png')}
                style={styles.iconInfo} />   <Text style={styles.moreInfo}>Ngũ Hành Sơn, Đà Nẵng, Việt Nam</Text>
              </Text> 
              <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,800,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
              <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
              <View style={{width: '95%'}}>
                <Text style={{fontSize:10, color: '#6A6767', marginTop: 6}} >
                Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, quý phái,... 
                </Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row',          
                        marginRight: 5,
                        marginTop: 20,
                        }}>
            <View style={{width: '40%'}}>
            <Image source={require('./img/room4.jpg')}
                    style={styles.imgSuggest} />
            </View>
            <View style={{width: '60%', marginLeft: 15, marginTop: 10}}>
              <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11.5, color: '#1B51DA'}}>Noble Apartment Studio 1</Text>
              <Text>
                <Image source={require('./img/location.png')}
                style={styles.iconInfo} />   <Text style={styles.moreInfo}>Cầu Giấy, Hà Nội, Việt Nam</Text>
              </Text> 
              <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>1,000,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
              <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
              <View style={{width: '95%'}}>
                <Text style={{fontSize:10, color: '#6A6767', marginTop: 6}} >
                Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, quý phái,... 
                </Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row',          
                        marginRight: 5,
                        marginTop: 20,
                        }}>
            <View style={{width: '40%'}}>
            <Image source={require('./img/room3.jpg')}
                    style={styles.imgInfo} />
            </View>
            <View style={{width: '60%', marginLeft: 15, marginTop: 10}}>
              <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11.5, color: '#1B51DA'}}>Luxury Apartment - The Golden</Text>
              <Text>
                <Image source={require('./img/location.png')}
                style={styles.iconInfo} />   <Text style={styles.moreInfo}>Hoàn Kiếm, Hà Nội, Việt Nam</Text>
              </Text> 
              <Text style={{fontFamily: 'serif', fontWeight: '700', fontSize: 11, color: '#3E3C3C', marginTop: 5}}>3,500,000₫  <Text style={{fontSize: 8, color: '#696666'}}>(1 đêm)</Text></Text>
              <View style={{borderBottomWidth: 0.7, borderBottomColor: '#c6c6c6', paddingBottom: 6}}></View>
              <View style={{width: '95%'}}>
                <Text style={{fontSize:10, color: '#6A6767', marginTop: 6}} >
                Được xây dựng theo tiêu chuẩn 5 sao Mường Thanh Luxury Đà Nẵng nằm bên bờ biển Mỹ Khê xinh đẹp, quý phái,... 
                </Text>
              </View>
            </View>
          </View>
          <View style={{paddingTop: 0, marginTop: 0, marginLeft: '30%'}}>
              <TouchableHighlight
                style={styles.button}
                >
                <Text style={{color: '#292929',fontFamily: 'serif', fontSize: 10, fontWeight: '700'}}>Xem thêm</Text>
              </TouchableHighlight>
            </View>
        </View>
        
        
        <ModalFilterView></ModalFilterView>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  borderBot: {
    borderBottomWidth: 0.5, 
    borderBottomColor: '#8A8383', 
    paddingBottom: 30, 
    marginLeft: 10, 
    marginRight: 10,
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 2,
    backgroundColor: '#eee'
  },

  screen: {
    padding: 0,
    width: '65%',
  },

  container: {
    marginHorizontal: 2,
    marginVertical: 1,
    paddingHorizontal: 8,
  },

  text: {
    textAlign: 'center',
  },

  textContainer: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 2,
    elevation: 1,
    shadowRadius: 1,
    shadowOpacity: 0.3,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  imgInfo: {
    width: '100%', 
    height: 110,
    marginTop: 10,
    borderRadius: 5, 
  },
  imgSuggest: {
    width: '100%', 
    height: 110,
    marginTop: 10,
    borderRadius: 14, 
  },

  imgHot: {
    width: '100%', 
    height: 190,
    marginTop: 10,
    marginLeft: 0,
    borderRadius: 14, 
    position: 'relative'
  },
  imgText: {
    position: 'absolute',
    bottom: 13,
    left: 0,
    color: '#fff',
    fontSize: 12,
    fontFamily: 'serif',
    fontWeight: '700',
    color: '#fff',
    backgroundColor : '#fa9e1b',
    padding : 3,
    paddingLeft: 7,
    paddingRight: 15,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
  },
  iconInfo: {
    width: 15,
    height: 15
  },
  avatarInfo:{
    width: 20,
    height: 20
  },
  moreInfo: {
    fontSize: 10,
    color: '#696666',
    marginTop: 10
  },
  moreInfo: {
    fontSize: 9,
    color: '#929191',
    marginTop: 5

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#e2e5e8',
    padding: 5,
    width: 135,
    height: 25,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonStar: {
    alignItems: 'center',
    backgroundColor: '#fa9e1b',
    width: '90%',
    borderRadius: 5,
    marginTop: 7,
  },
});

const typographyData = [
  { value: 'Display2', label: 'Display 2' },
  { value: 'Display1', label: 'Display 1' },
  { value: 'Headline' },
  { value: 'Title' },
  { value: 'Subheading' },
  { value: 'Body' },
  { value: 'Caption' },
];
