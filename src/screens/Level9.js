import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header';
const Level9 = ({ navigation, route }) => {
    const { name } = route?.params;
    return (
        <View style={{ flex: 1 }} >
            <Header showMessage={() => alert("About this Level")} name={name} navigation={navigation} />
            <Text style={{alignSelf:"center",marginTop:100,fontSize:20,fontWeight:"bold"}} >Coming Soon!</Text>
        </View>
    )
}

export default Level9