
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import FileViewer from "react-native-file-viewer";
// import RNHTMLtoPDF from 'react-native-html-to-pdf';


const App = () => {

  const [mistakes, setMistakes] = useState(0)

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
  const [reset, setReset] = useState([
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
  const [winningArray, setWinningArray] = useState([
    {
      'val': "9",
      "leftPos": null,
      "topPos": null,
      "rightPos": 1,
      "downPos": 3,
      "color": ''
    },
    {
      'val': "5",
      "leftPos": 0,
      "topPos": null,
      "rightPos": 2,
      "downPos": 4,
      "color": ''
    },
    {
      'val': "4",
      "leftPos": 1,
      "topPos": null,
      "rightPos": null,
      "downPos": 5,
      "color": ''
    },
    {
      'val': "8",
      "leftPos": null,
      "topPos": 0,
      "rightPos": 4,
      "downPos": 6,
      "color": ''
    },
    {
      'val': "3",
      "leftPos": 3,
      "topPos": 1,
      "rightPos": 5,
      "downPos": 7,
      "color": ''
    },
    {
      'val': "6",
      "leftPos": 4,
      "topPos": 2,
      "rightPos": null,
      "downPos": 8,
      "color": ''
    },
    {
      'val': "2",
      "leftPos": null,
      "topPos": 3,
      "rightPos": 7,
      "downPos": null,
      "color": ''
    },
    {
      'val': "7",
      "leftPos": 6,
      "topPos": 4,
      "rightPos": 8,
      "downPos": null,
      "color": ''
    },
    {
      'val': "1",
      "leftPos": 7,
      "topPos": 5,
      "rightPos": null,
      "downPos": null,
      "color": ''
    }
  ])
  const [enter, setEnter] = useState("5")
  const [showLeft, setshowLeft] = useState(true)
  const [showRight, setshowRight] = useState(true)
  const [showUp, setshowUp] = useState(true)
  const [showDown, setshowDown] = useState(true)

  useEffect(() => {
    getColored(5)
  }, [])
  useEffect(() => {
    if (mistakes === 10) {
      alert('You are out')
      setArray([...reset])
      getColored(5)
      setMistakes(0)

    }
  }, [mistakes])
  // const createPDF = async () => {
  //   let options = {
  //     html: '<h1>PDF TEST</h1>',
  //     fileName: 'test',
  //     directory: 'Documents',
  //   };

  //   let file = await RNHTMLtoPDF.convert(options)
  //   // console.log(file.filePath);
  //   console.log(file.filePath);
  //   const path = FileViewer.open(file.filePath) // absolute-path-to-my-local-file.
  //     .then(() => {
  //       // success
  //     })
  //     .catch((error) => {
  //       // error
  //     });
  //   console.log(path)
  // }


  function Move(txt) {

    let Pos = null
    let currentIndex = null

    let Val = null

    array.map((item, index) => {
      console.log(item + " " + enter)
      if (item.val.toString() === enter.toString()) {
        if (txt === 'left') {
          if (item.leftPos !== null)
            Pos = item.leftPos
          else
            setMistakes(parseInt(mistakes) + 1)
        }
        if (txt === 'Right') {
          if (item.rightPos !== null)
            Pos = item.rightPos
          else
            setMistakes(parseInt(mistakes) + 1)

        }
        if (txt === 'Up') {
          if (item.topPos !== null)
            Pos = item.topPos
          else
            setMistakes(parseInt(mistakes) + 1)

        }
        if (txt === 'Down') {

          if (item.downPos !== null)
            Pos = item.downPos
          else
            setMistakes(parseInt(mistakes) + 1)

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
      data[Pos].color = 'purple';
      data[currentIndex].color = '';
      let colorIndex = null
      data.map((item, index) => {
        if (item.color === 'purple') {
          colorIndex = index
        }
      })

      winningArray.map((item, index) => {
        if (index === colorIndex) {
          item.color = 'purple'
        }
        else {
          item.color = ""

        }
      })
      setArray([...data])
      hideUnusedButtons(data, enter)
    }

    console.log("winnin", JSON.stringify(winningArray))
    console.log("simple", JSON.stringify(array))






    if (JSON.stringify(winningArray) === JSON.stringify(array)) {
      alert("Won")
    }


  }
  const getColored = (text) => {
    if (String(text).length > 0) {
      // alert(text.toString())
      setEnter(text.toString())
      let data = array
      let colorIndex = null
      data.map((item, index) => {
        if (item.val.toString() === String(text)) {
          item.color = 'purple'
          colorIndex = index
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
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={{ flexDirection: "row", width: "100%", alignItems: "center", justifyContent: 'center' }} >
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: "purple" }} >Level 1</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', position: "absolute", zIndex: 1, right: 20, color: "red" }} >Mistakes: {mistakes}</Text>
      </View>


      <View style={{ flexDirection: "row", marginTop: 20 }} >

        {
          array.slice(0, 3).map((item, index) => {
            return (
              <>
                <TouchableOpacity onPress={() => getColored(item.val)} style={{ borderColor: "purple", backgroundColor: item.color ? item.color : 'transparent', height: 60, width: 60, borderRadius: 10, borderWidth: 1, justifyContent: 'center', alignItems: "center" }} >
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: item.color ? "white" : "black" }} >{item.val}</Text>
                </TouchableOpacity>
                {/* <Text>{'\n'} </Text> */}
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
                <TouchableOpacity onPress={() => getColored(item.val)} style={{ borderColor: "purple", backgroundColor: item.color ? item.color : 'transparent', height: 60, width: 60, borderRadius: 10, borderWidth: 1, justifyContent: 'center', alignItems: "center" }} >
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: item.color ? "white" : "black" }} >{item.val}</Text>
                </TouchableOpacity>
                {/* <Text>{'\n'} </Text> */}
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
                <TouchableOpacity onPress={() => getColored(item.val)} style={{ borderColor: "purple", backgroundColor: item.color ? item.color : 'transparent', height: 60, width: 60, borderRadius: 10, borderWidth: 1, justifyContent: 'center', alignItems: "center" }} >
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: item.color ? "white" : "black" }} >{item.val}</Text>
                </TouchableOpacity>
                {/* <Text>{'\n'} </Text> */}
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
              // showLeft &&
              <TouchableOpacity onPress={() => Move('left')} style={{ borderColor: 'purple', borderWidth: 4, width: "20%", height: 50, borderRadius: 20, justifyContent: "center", alignItems: "center" }} >
                <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }} >Left</Text>
              </TouchableOpacity>

            }
            {
              // showRight &&
              <TouchableOpacity onPress={() => Move('Right')} style={{ borderColor: 'purple', borderWidth: 4, width: "20%", height: 50, borderRadius: 20, justifyContent: "center", alignItems: "center" }}  >
                <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }} >Right</Text>
              </TouchableOpacity>
            }
            {
              // showUp &&
              <TouchableOpacity onPress={() => Move('Up')} style={{ borderColor: 'purple', borderWidth: 4, width: "20%", height: 50, borderRadius: 20, justifyContent: "center", alignItems: "center" }}  >
                <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }} >Up</Text>
              </TouchableOpacity>
            }
            {
              // showDown &&
              <TouchableOpacity onPress={() => Move('Down')} style={{ borderColor: 'purple', borderWidth: 4, width: "20%", height: 50, borderRadius: 20, justifyContent: "center", alignItems: "center" }}  >
                <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }} >Down</Text>
              </TouchableOpacity>
            }

            {/* <TouchableOpacity onPress={() => createPDF()} style={{ borderWidth: 1, width: 60, height: 30, justifyContent: "center", alignItems: "center" }} >
              <Text>Upload</Text>
            </TouchableOpacity> */}
          </View>

          : null

      }
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: "purple" }} >Match this Puzzle</Text>

      <View style={{ flexDirection: "row", marginTop: 20 }} >

        {
          winningArray.slice(0, 3).map((item, index) => {
            return (
              <>
                <TouchableOpacity onPress={() => getColored(item.val)} style={{ borderColor: "purple", backgroundColor: 'transparent', height: 60, width: 60, borderRadius: 10, borderWidth: 1, justifyContent: 'center', alignItems: "center" }} >
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }} >{item.val}</Text>
                </TouchableOpacity>
                {/* <Text>{'\n'} </Text> */}
              </>

            )
          })
        }

      </View>
      <View style={{ flexDirection: "row" }} >

        {
          winningArray.slice(3, 6).map((item, index) => {
            return (
              <>
                <TouchableOpacity onPress={() => getColored(item.val)} style={{ borderColor: "purple", backgroundColor: 'transparent', height: 60, width: 60, borderRadius: 10, borderWidth: 1, justifyContent: 'center', alignItems: "center" }} >
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }} >{item.val}</Text>
                </TouchableOpacity>
                {/* <Text>{'\n'} </Text> */}
              </>

            )
          })
        }

      </View>
      <View style={{ flexDirection: "row" }} >

        {
          winningArray.slice(6, 9).map((item, index) => {
            return (
              <>
                <TouchableOpacity onPress={() => getColored(item.val)} style={{ borderColor: "purple", backgroundColor: 'transparent', height: 60, width: 60, borderRadius: 10, borderWidth: 1, justifyContent: 'center', alignItems: "center" }} >
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }} >{item.val}</Text>
                </TouchableOpacity>
                {/* <Text>{'\n'} </Text> */}
              </>

            )
          })
        }

      </View>
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
