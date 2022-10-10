
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



const App = () => {

  const [mistakes, setMistakes] = useState(0)
  const [press, setPress] = useState(0)
  const [matrix, setMatrix] = useState(3)

  const [array, setArray] = useState([])
  const [arrayUI, setArrayUI] = useState([]);

  useEffect(() => {
    generateDynamicArray()
    randomArray(matrix * matrix)
  }, []);

  useEffect(() => {
    generateDynamicArray()
    randomArray(matrix * matrix)
  }, [matrix]);
  function randomArray(n) {
    let array = []
    let totalNumber = []
    for (let i = 0; i < n; i++) {
      let randomnum = Math.floor(Math.random() * n + 1);
      // let randomnum=Math.floor(Math.random() * (n - 1 + 1) + 1)
      totalNumber.push(i + 1)
      if (!(array.indexOf(randomnum) >= 0)) {
        array.push(randomnum)
      }

      var remainValues = totalNumber.filter(x => array.indexOf(x) === -1)
      remainValues.map((item, index) => {
        array.push(item)
      })

    }
    generateDynamicWinningArray(array)

    console.log(JSON.stringify(array))
  }
  const generateDynamicWinningArray = (randomSmallArray) => {
    let temp = [];
    let numberOfTime = matrix * matrix;
    for (let i = 0; i < numberOfTime; i++) {
      temp.push({
        val: String(randomSmallArray[i]),
        leftPos: (i + 1 - 1 < 0 ? null : i % matrix === 0 ? null : i + 1 - 1) === null ? null : (i + 1 - 1 < 0 ? null : i % matrix === 0 ? null : i + 1 - 1) - 1,

        topPos: (i + 1 - matrix <= 0 ? null : i + 1 - matrix) === null ? null : (i + 1 - matrix <= 0 ? null : i + 1 - matrix) - 1,
        rightPos:
          (i + 1 + 1 > matrix * matrix
            ? null
            : (i + 1) % matrix === 0
              ? null
              : i + 1 + 1) === null ? null : (i + 1 + 1 > matrix * matrix
                ? null
                : (i + 1) % matrix === 0
                  ? null
                  : i + 1 + 1) - 1,
        downPos: (i + 1 + matrix > matrix * matrix ? null : i + 1 + matrix) === null ? null : (i + 1 + matrix > matrix * matrix ? null : i + 1 + matrix) - 1,
        color: ""
      });
    }
    console.log("jjjjj ", JSON.stringify(temp))
    setWinningArray([...temp]);
  }
  const generateDynamicArray = () => {

    let tempp = [];
    for (let i = 0; i < matrix; i++) {
      tempp.push([{}]);
    }
    setArrayUI([...tempp]);

    let temp = [];
    let numberOfTime = matrix * matrix;
    for (let i = 0; i < numberOfTime; i++) {
      temp.push({
        val: String(i + 1),
        leftPos: (i + 1 - 1 < 0 ? null : i % matrix === 0 ? null : i + 1 - 1) === null ? null : (i + 1 - 1 < 0 ? null : i % matrix === 0 ? null : i + 1 - 1) - 1,

        topPos: (i + 1 - matrix <= 0 ? null : i + 1 - matrix) === null ? null : (i + 1 - matrix <= 0 ? null : i + 1 - matrix) - 1,
        rightPos:
          (i + 1 + 1 > matrix * matrix
            ? null
            : (i + 1) % matrix === 0
              ? null
              : i + 1 + 1) === null ? null : (i + 1 + 1 > matrix * matrix
                ? null
                : (i + 1) % matrix === 0
                  ? null
                  : i + 1 + 1) - 1,
        downPos: (i + 1 + matrix > matrix * matrix ? null : i + 1 + matrix) === null ? null : (i + 1 + matrix > matrix * matrix ? null : i + 1 + matrix) - 1,
        color: i + 1 === (parseInt(numberOfTime / 2)) + 1 ? "purple" : ""
      });
    }
    console.log("jjjjj ", JSON.stringify(temp))
    setArray([...temp]);
  }
  const [winningArray, setWinningArray] = useState([])
  const [enter, setEnter] = useState(String((matrix * matrix) / 2 + 1))

  useEffect(() => {
    if (mistakes === 10) {
      alert('You are out')
      generateDynamicArray()
      randomArray(matrix * matrix)
      setMistakes(0)
    }
  }, [mistakes])


  function Move(txt) {

    let Pos = null
    let currentIndex = null

    let Val = null

    array.map((item, index) => {
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
      if (index === Pos) {
        Val = item.val
      }
    })
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
    }


    if (JSON.stringify(winningArray) === JSON.stringify(array)) {
      if (press < 10 && matrix===5) {
        alert("Well DOne you won 10 rupee paytem Cash")

      }
      if (press < 15  && matrix===5) {
        alert("Great Job , Well Done.....you are about to win 10 rupee cash")

      }
      if (press <= 30  && matrix===7) {
        alert('good job')
      }
      if (press > 24  && matrix===7) {
        alert('You won , Please try to be better')
      }
      if (press < 18 && matrix===7) {
        alert("Well DOne you won 10 rupee paytem Cash")

      }
      if (press < 17  && matrix===7) {
        alert("Great Job , Well Done.....you are about to win 10 rupee cash")

      }
      if (press <= 20  && matrix===5) {
        alert('good job')
      }
      if (press > 20  && matrix===5) {
        alert('You won , Please try to be better')
      }
      if (press < 3 && matrix===3) {
        alert("Well DOne you won 10 rupee paytem Cash")

      }
      if (press < 5  && matrix===3) {
        alert("Great Job , Well Done.....you are about to win 10 rupee cash")

      }
      if (press <= 8  && matrix===3) {
        alert('good job')
      }
      if (press > 10  && matrix===3 ) {
        alert('You won , Please try to be better')
      }
      if (press < 7 && matrix===4) {
        alert("Well DOne you won 10 rupee paytem Cash")

      }
      if (press < 12  && matrix===4) {
        alert("Great Job , Well Done.....you are about to win 10 rupee cash")

      }
      if (press <= 16  && matrix===4) {
        alert('good job')
      }
      if (press > 16  && matrix===4 ) {
        alert('You won , Please try to be better')
      }
     
      generateDynamicArray()
      randomArray(matrix * matrix)
      setMistakes(0)
      setPress(0)
    }

  }
  const getColored = (text, type) => {
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
      setPress(press + 1)
      setArray([...data])
    }
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginVertical: 10 }} >
        <View style={{ flexDirection: "row", flex: 1, marginTop: 10 }}  >
          <TouchableOpacity onPress={() => setMatrix(3)} style={{ paddingHorizontal: 10, height: 40, justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 10 }}  >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "green" }}  >Level 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMatrix(4)} style={{ paddingHorizontal: 10, marginHorizontal: 10, height: 40, justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 10 }}  >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "green" }}  >Level 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMatrix(5)} style={{ paddingHorizontal: 10, height: 40, justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 10 }}  >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "green" }}  >Level 3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMatrix(7)} style={{ paddingHorizontal: 10, height: 40, justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 10 }}  >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "green" }}  >Level 4</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", width: "100%", marginBottom: 10, alignItems: "center", justifyContent: 'center' }} >
          <Text style={{ fontSize: 20, fontWeight: 'bold', position: "absolute", zIndex: 1, left: 20, color: "red" }} >Press: {press}</Text>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: "purple" }} >Level {matrix == 3 ? "1" : matrix == 4 ? "2" :matrix == 5? "3":"4"}</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', position: "absolute", zIndex: 1, right: 20, color: "red" }} >Mistakes: {mistakes}</Text>
        </View>
        {arrayUI.map((item, index) => {
          return (
            <View style={{ flexDirection: "row" }} >

              {
                array.slice(matrix * index, matrix * (index + 1)).map((item, index) => {
                  return (
                    <>
                      <TouchableOpacity onPress={() => getColored(item.val, "new")} style={{ borderColor: "purple", backgroundColor: item.color ? item.color : 'transparent', height: 200 / matrix, width: 200 / matrix, borderRadius: 10, borderWidth: 1, justifyContent: 'center', alignItems: "center" }} >
                        <Text style={{ fontSize: 100 / matrix, fontWeight: 'bold', color: item.color ? "white" : "black" }} >{item.val}</Text>
                      </TouchableOpacity>
                    </>

                  )
                })
              }

            </View>
          );
        })}

        {
          enter !== null ?
            <View style={{ flexDirection: "row", margin: 30, width: "100%", justifyContent: "space-evenly" }} >

              {
                <TouchableOpacity onPress={() => Move('left')} style={{ borderColor: 'purple', borderWidth: 4, width: "20%", height: 50, borderRadius: 20, justifyContent: "center", alignItems: "center" }} >
                  <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }} >Left</Text>
                </TouchableOpacity>

              }
              {
                <TouchableOpacity onPress={() => Move('Right')} style={{ borderColor: 'purple', borderWidth: 4, width: "20%", height: 50, borderRadius: 20, justifyContent: "center", alignItems: "center" }}  >
                  <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }} >Right</Text>
                </TouchableOpacity>
              }
              {
                <TouchableOpacity onPress={() => Move('Up')} style={{ borderColor: 'purple', borderWidth: 4, width: "20%", height: 50, borderRadius: 20, justifyContent: "center", alignItems: "center" }}  >
                  <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }} >Up</Text>
                </TouchableOpacity>
              }
              {
                <TouchableOpacity onPress={() => Move('Down')} style={{ borderColor: 'purple', borderWidth: 4, width: "20%", height: 50, borderRadius: 20, justifyContent: "center", alignItems: "center" }}  >
                  <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }} >Down</Text>
                </TouchableOpacity>
              }
            </View>

            : null

        }
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: "purple", marginVertical: 20 }} >Match this Puzzle</Text>
        {arrayUI.map((item, index) => {
          return (
            <View style={{ flexDirection: "row" }} >

              {
                winningArray.slice(matrix * index, matrix * (index + 1)).map((item, index) => {
                  return (
                    <>
                      <TouchableOpacity onPress={() => getColored(item.val, "new")} style={{ borderColor: "purple", backgroundColor: 'transparent', height: 200 / matrix, width: 200 / matrix, borderRadius: 10, borderWidth: 1, justifyContent: 'center', alignItems: "center" }} >
                        <Text style={{ fontSize: 100 / matrix, fontWeight: 'bold', color: "black" }} >{item.val}</Text>
                      </TouchableOpacity>
                    </>

                  )
                })
              }

            </View>
          );
        })}
      </View>

    </ScrollView>

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
