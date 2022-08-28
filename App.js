
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';
import FileViewer from "react-native-file-viewer";
import RNHTMLtoPDF from 'react-native-html-to-pdf';


const App = () => {

  const [array, setArray] = useState([
    {
      'val': 1,
      "leftPos": null,
      "topPos": null,
      "rightPos": 1,
      "downPos": 3,
      "color": ''
    },
    {
      'val': 2,
      "leftPos": 0,
      "topPos": null,
      "rightPos": 2,
      "downPos": 4,
      "color": ''
    },
    {
      'val': 3,
      "leftPos": 1,
      "topPos": null,
      "rightPos": null,
      "downPos": 5,
      "color": ''
    },
    {
      'val': 4,
      "leftPos": null,
      "topPos": 0,
      "rightPos": 4,
      "downPos": 6,
      "color": ''
    },
    {
      'val': 5,
      "leftPos": 3,
      "topPos": 1,
      "rightPos": 5,
      "downPos": 7,
      "color": ''
    },
    {
      'val': 6,
      "leftPos": 4,
      "topPos": 2,
      "rightPos": null,
      "downPos": 8,
      "color": ''
    },
    {
      'val': 7,
      "leftPos": null,
      "topPos": 3,
      "rightPos": 7,
      "downPos": null,
      "color": ''
    },
    {
      'val': 8,
      "leftPos": 6,
      "topPos": 4,
      "rightPos": 8,
      "downPos": null,
      "color": ''
    },
    {
      'val': 9,
      "leftPos": 7,
      "topPos": 5,
      "rightPos": null,
      "downPos": null,
      "color": ''
    }
  ])
  const [enter, setEnter] = useState(null)
  const [showLeft, setshowLeft] = useState(true)
  const [showRight, setshowRight] = useState(true)
  const [showUp, setshowUp] = useState(true)
  const [showDown, setshowDown] = useState(true)


  const createPDF = async () => {
    let options = {
      html: '<h1>PDF TEST</h1>',
      fileName: 'test',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options)
    // console.log(file.filePath);
    console.log(file.filePath);
    const path = FileViewer.open(file.filePath) // absolute-path-to-my-local-file.
      .then(() => {
        // success
      })
      .catch((error) => {
        // error
      });
    console.log(path)
  }


  function Move(txt) {

    let Pos = null
    let currentIndex = null

    let Val = null

    array.map((item, index) => {
      console.log(item + " " + enter)
      if (item.val.toString() === enter.toString()) {
        if (txt === 'left') {
          Pos = item.leftPos
        }
        if (txt === 'Right') {
          Pos = item.rightPos
        }
        if (txt === 'Up') {
          Pos = item.topPos
        }
        if (txt === 'Down') {
          Pos = item.downPos
        }
        currentIndex = index
      }
    })
    array.map((item, index) => {
      console.log(item + " " + enter)
      if (index === Pos) {
        Val = item.val
      }
    })
    console.log(Pos + "...... " + currentIndex + " " + Val)
    if (Pos !== null) {
      let data = array
      data[Pos].val = enter;
      data[currentIndex].val = Val;
      data[Pos].color = 'red';
      data[currentIndex].color = '';

      setArray([...data])
      hideUnusedButtons(data, enter)
    }

  }
  const getColored = (text) => {
    if (String(text).length > 0) {
      setEnter(text.toString())
      let data = array
      data.map((item, index) => {
        if (item.val.toString() === String(text)) {
          item.color = 'red'
        }
        else {
          item.color = ''
        }
      })

      hideUnusedButtons(data, text)
      setArray([...data])
    }
  }
  const hideUnusedButtons = (data, text) => {
    console.log("dsdsd ", data)
    data.map((item) => {
      if (item.val === text) {
        setshowLeft(item.leftPos === null ? false : true)
        setshowRight(item.rightPos === null ? false : true)
        setshowUp(item.topPos === null ? false : true)
        setshowDown(item.downPos === null ? false : true)
      }
    })

  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={{ flexDirection: "row" }} >

        {
          array.slice(0, 3).map((item, index) => {
            return (
              <>
                <TouchableOpacity onPress={() => getColored(item.val)} style={{ backgroundColor: item.color ? item.color : 'transparent', height: 40, width: 40, borderWidth: 1, justifyContent: 'center', alignItems: "center" }} >
                  <Text style={{ fontSize: 20 }} >{item.val}</Text>
                </TouchableOpacity>
                <Text>{'\n'} </Text>
              </>

            )
          })
        }

      </View>
      <View style={{ flexDirection: "row" }} >

        {
          array.slice(3, 6).map((item, index) => {
            return (
              <>
                <TouchableOpacity onPress={() => getColored(item.val)} style={{ backgroundColor: item.color ? item.color : 'transparent', height: 40, width: 40, borderWidth: 1, justifyContent: 'center', alignItems: "center" }} >
                  <Text style={{ fontSize: 20 }} >{item.val}</Text>
                </TouchableOpacity>
                <Text>{'\n'} </Text>
              </>

            )
          })
        }

      </View>
      <View style={{ flexDirection: "row" }} >

        {
          array.slice(6, 9).map((item, index) => {
            return (
              <>
                <TouchableOpacity onPress={() => getColored(item.val)} style={{ backgroundColor: item.color ? item.color : 'transparent', height: 40, width: 40, borderWidth: 1, justifyContent: 'center', alignItems: "center" }} >
                  <Text style={{ fontSize: 20 }} >{item.val}</Text>
                </TouchableOpacity>
                <Text>{'\n'} </Text>
              </>

            )
          })
        }

      </View>

      {/* <TextInput
        value={enter}
        style={{ borderBottomWidth: 1, width: '90%', marginVertical: 20 }}
        placeholder={'Enter number'}
        onChangeText={(text) => {
          getColored(text)
        }}
      /> */}
      {
        enter !== null ?
          <View style={{ flexDirection: "row", margin: 30, width: "100%", justifyContent: "space-evenly" }} >

            {
              showLeft &&
              <TouchableOpacity onPress={() => Move('left')} style={{ borderWidth: 1, width: 60, height: 30, justifyContent: "center", alignItems: "center" }} >
                <Text>Left</Text>
              </TouchableOpacity>

            }
            {
              showRight &&
              <TouchableOpacity onPress={() => Move('Right')} style={{ borderWidth: 1, width: 60, height: 30, justifyContent: "center", alignItems: "center" }} >
                <Text>Right</Text>
              </TouchableOpacity>
            }
            {
              showUp &&
              <TouchableOpacity onPress={() => Move('Up')} style={{ borderWidth: 1, width: 60, height: 30, justifyContent: "center", alignItems: "center" }} >
                <Text>Up</Text>
              </TouchableOpacity>
            }
            {
              showDown &&
              <TouchableOpacity onPress={() => Move('Down')} style={{ borderWidth: 1, width: 60, height: 30, justifyContent: "center", alignItems: "center" }} >
                <Text>Down</Text>
              </TouchableOpacity>
            }

            {/* <TouchableOpacity onPress={() => createPDF()} style={{ borderWidth: 1, width: 60, height: 30, justifyContent: "center", alignItems: "center" }} >
              <Text>Upload</Text>
            </TouchableOpacity> */}
          </View>

          : null

      }

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
