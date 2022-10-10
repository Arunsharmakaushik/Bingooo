import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ navigation, name, showMessage }) => {
    return (
        <View style={{ flexDirection: "row", width: '100%', height: '8%', alignItems: "center", backgroundColor: 'white', paddingHorizontal: 20 }} >
            <Icon
                name="chevron-left"
                size={30}
                onPress={() => navigation.goBack()}
                color={'#700CB3'}

            />
            <Text style={{ flex: 1, textAlign: "center",color:'#700CB3', marginRight: 20, fontSize: 20, fontWeight: "bold" }} >{name}</Text>
            <Icon
                name="info-circle"
                size={30}
                onPress={() => showMessage()}
                color={'#700CB3'}
            />
        </View>

    )
}

export default Header