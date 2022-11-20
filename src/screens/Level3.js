import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Entypo';

const Level3 = ({ navigation, route }) => {
    const { name } = route?.params;
    console.log("OPOP")
    const [intialSpace, setIntialSpace] = useState([
        {
            active: false, name: 'lion', link: "https://static.vecteezy.com/system/resources/previews/005/112/698/original/cute-lion-cartoon-lying-down-free-vector.jpg"
        },
        {
            active: false, name: 'grass', link: "https://thumbs.dreamstime.com/b/green-grass-vector-icon-cartoon-isolated-white-background-logo-178960916.jpg"
        },
        {
            active: false, name: 'goat', link: "https://img.freepik.com/free-vector/black-goat-cartoon-character_1308-109476.jpg?w=740&t=st=1668962850~exp=1668963450~hmac=84a8eedff60b5b0158bb4b4a2bcf117bd4a7c061397d0498e00868c6284f8a34"
        },

    ])

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }} >
            <Header showMessage={() => alert("About this Level")} name={name} navigation={navigation} />

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'white' }} >
                <View style={{ flexDirection: "row",marginBottom:200, paddingHorizontal: 30, width: '100%', justifyContent: "space-between" }} >
                    {intialSpace.map((item, index) => {
                        return (
                            <View style={{ alignItems: "center" }} >
                                {
                                    item.active ?
                                        <>
                                            <Icon
                                                onPress={() => {
                                                    let intialData = intialSpace;
                                                    intialData[index].active = false;
                                                    setIntialSpace([...intialData])

                                                }}
                                                name="arrow-down"
                                                size={50}
                                                color="#000000"
                                            />
                                            <Image style={{ height: 70, width: 90 }} source={{ uri: item.link }} />

                                        </>
                                        : null
                                }

                            </View>

                        )
                    })}
                </View>
                <Image style={{ height: '20%', width: "100%" ,position:"absolute",zIndex:1,}} source={{ uri: "https://media.istockphoto.com/id/1345474636/vector/vector-illustration-river-and-forest-top-view.jpg?s=612x612&w=0&k=20&c=Y_WnOlpji7RWqqTJR6GXTGMNvqG18lRozkdjkwNObbk=" }} />
                <View style={{ flexDirection: "row",marginTop:150, paddingHorizontal: 30, width: '100%', justifyContent: "space-between" }} >
                    {intialSpace.map((item, index) => {
                        return (
                            <View style={{ alignItems: "center" }} >
                                {
                                    !item.active ?
                                        <>
                                            <Image style={{ height: 70, width: 90 }} source={{ uri: item.link }} />
                                            <Icon
                                                onPress={() => {

                                                    let intialData = intialSpace;
                                                    intialData[index].active = true;
                                                    setIntialSpace([...intialData])

                                                }}
                                                name="arrow-bold-up"
                                                size={50}
                                                color="#000000"
                                            />
                                        </>
                                        : null
                                }

                            </View>

                        )
                    })}
                </View>

            </View>

        </View>

    )
}

export default Level3