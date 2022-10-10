import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = ({ navigation }) => {
  const [levels, setLevels] = useState([
    {
      name: "Level 1", onClickLevel: () => navigation.navigate("Level1", { name: "Level 1" }), lock: false
    },
    {
      name: "Level 2", onClickLevel: () => navigation.navigate("Level2", { name: "Level 2" }), lock: true
    },
    {
      name: "Level 3", onClickLevel: () => navigation.navigate("Level3", { name: "Level 3" }), lock: true
    },
    {
      name: "Level 4", onClickLevel: () => navigation.navigate("Level4", { name: "Level 4" }), lock: true
    },
    {
      name: "Level 5", onClickLevel: () => navigation.navigate("Level5", { name: "Level 5" }), lock: true
    },

    {
      name: "Level 6", onClickLevel: () => navigation.navigate("Level6", { name: "Level 6" }), lock: true
    },
    {
      name: "Level 7", onClickLevel: () => navigation.navigate("Level7", { name: "Level 7" }), lock: true
    },

    {
      name: "Level 8", onClickLevel: () => navigation.navigate("Level8", { name: "Level 8" }), lock: true
    },
    {
      name: "Level 9", onClickLevel: () => navigation.navigate("Level9", { name: "Level 9" }), lock: true
    },

    {
      name: "Level 10", onClickLevel: () => navigation.navigate("Level10", { name: "Level 10" }), lock: true
    },
  ])
  return (
    <View style={{ flex: 1 }} >
      <Text style={{ textAlign: "center", fontWeight: "bold", color: "#800080", fontSize: 25, margin: 10 }} >BINNNGO</Text>

      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: 'wrap', padding: 20, flex: 1 }} >
          {
            levels.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => { item.lock ? alert("Locked") : item.onClickLevel() }} style={{ elevation: 10,borderWidth:!item.lock?2:0,borderColor:!item.lock?"#700CB3":null, shadowColor: "#800080", backgroundColor: '#fff', height: 150, width: '46%', margin: "1%", justifyContent: "center", alignItems: "center", borderRadius: 10 }} >
                  <Text style={{ textAlign: "center", paddingBottom: 10, fontWeight: "bold", color: "#cc8899", fontSize: 20 }}>{item.name}</Text>
                  {
                    item.lock ?
                      <Icon
                        name="lock"
                        size={30}
                        color="#800080"
                      />
                      :
                      <Icon
                        name="lock-open"
                        size={30}
                        color="#700CB3"
                      />
                  }

                </TouchableOpacity>
              )
            })
          }
        </View>

      </ScrollView>

    </View>
  )
}

export default App