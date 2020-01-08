import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    StatusBar, 
    ListView, 
    ScrollView, 
    TouchableOpacity,
    Alert, 
    Image, 
    TextInput, 
    Group,
    TouchableHighlight,
    Button,

} from 'react-native';
import DatePicker from 'react-native-datepicker';

import { createAppContainer  } from 'react-navigation';

export default class Payment extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            date:"2016-05-15",
        }
    }

    render(){
        return (
            <ScrollView>
               <View style={styles.header}>
               </View>
               <View style={styles.}></View>
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
  
})
