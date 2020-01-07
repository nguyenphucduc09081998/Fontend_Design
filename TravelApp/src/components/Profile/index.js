import React from 'react';
import { Text, View, StyleSheet, StatusBar, ListView, 
    ScrollView, TouchableOpacity, Alert, Image, TextInput, Group
} from 'react-native';

import { createAppContainer  } from 'react-navigation';

export default class Profile extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ScrollView>
                <View style={[styles.container]}>
                    <View style={styles.avt_gr}>
                        <View style={[styles.col_md_4]}> 
                            <Image source={require('./img/avatar.png')}/>
                            <Text>Lê Minh Hiếu</Text>
                        </View>
                        <View style={styles.col_md_4}>
                            <Text>05</Text>
                            <Text>Chuyến đi</Text>
                        </View>
                        <View style={styles.col_md_4}>
                            <Text>02</Text>
                            <Text>Địa điểm</Text>
                        </View>
                    </View>
                    <View style={styles.input_profile}>
                        <View style={styles.title_profile}>
                            <Text>Thông tin cá nhân</Text>
                            <Text>Thông tin chi tiết khách hàng</Text>
                        </View>
                        <View style={styles.form_input}>
                            <View style={styles.form_group}>
                                <Text style={styles.left}> Tên Khách Hàng</Text>
                                <TextInput style={[styles.Input, styles.right]} value={'Tên khách hàng'}/>
                            </View>
                            <View style={styles.form_group}>
                                <Text>Số điện thoại</Text>
                                <TextInput style={styles.Input} value={'SDT'}/>
                            </View>
                            <View style={styles.form_group}>
                                <Text>Email</Text>
                                <TextInput style={styles.Input} value={'Email'}/>
                            </View>                            
                            
                        </View>
                    </View>
                    
                    <Text></Text>
                </View>
                <View>
                </View>
                <View>
                </View>
                <View>
                </View>

            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      paddingHorizontal: 20,
      paddingBottom: 100,
        width: '100%',
        flexWrap: 'wrap'
    },
    avt_gr: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderBottomColor: '#8A8383',
        borderBottomWidth: 2,
        paddingBottom: 10,  
    },
    col_md_4: {
        width: '33%',
        justifyContent: 'center'
    },
    title_profile: {
        marginTop: 15,
        borderBottomColor: '#CCC9C9',
        borderBottomWidth: 1,
        paddingBottom: 10,  
        marginBottom: 20
    },
    Input: {
        borderColor: '#CCC9C9',
        borderWidth: 0.5,
        borderRadius: 10,
        width: '50%', 
    },
    form_group: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    left: {
        justifyContent: 'flex-end'
    },
    right: {
        flexDirection: 'row-reverse',
        textAlign: 'right'
    }
})
