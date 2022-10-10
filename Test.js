import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FaceBookss from './src/fb/FaceBookss';
// import FileViewer from "react-native-file-viewer";
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
let matrix = 6;
const App = () => {
  const [array, setArray] = useState([]);
  const [arrayUI, setArrayUI] = useState([]);

  useEffect(() => {
    let tempp = [];
    for (let i = 0; i < matrix; i++) {
      tempp.push([{}]);
    }
    setArrayUI([...tempp]);

    let temp = [];
    let numberOfTime = matrix * matrix;
    for (let i = 0; i < numberOfTime; i++) {
      temp.push({
        value: i + 1,
        top: i + 1 - matrix <= 0 ? null : i + 1 - matrix,
        right:
          i + 1 + 1 > matrix * matrix
            ? null
            : (i + 1) % matrix === 0
            ? null
            : i + 1 + 1,
        bottom: i + 1 + matrix > matrix * matrix ? null : i + 1 + matrix,
        left: i + 1 - 1 < 0 ? null : i % matrix === 0 ? null : i + 1 - 1,
        // top:i-matrix>0?i-matrix:null,
        // right:matrix%(i+1)===0?null:i+1,
        // bottom:i+matrix<(matrix*matrix)-1?i+matrix:null,
        // left:i-1>0?matrix%i===0?null:i-1:null
      });
    }
    console.log('arraeey  ::::::', JSON.stringify(temp));
    setArray([...temp]);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {arrayUI.map((item, index) => {
        return (
          <View style={{flexDirection: 'row'}}>
            {array
              .slice(matrix *index, matrix  (index + 1))
              .map((item, index) => {
                return (
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      borderWidth: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>{item.value}</Text>
                  </View>
                );
              })}
          </View>
        );
      })}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

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

            {/* <TouchableOpacity onPress={() => createPDF()} style={{ borderWidth: 1, width: 60, height: 30, justifyContent: "center", alignItems: "center" }} >
              <Text>Upload</Text>
            </TouchableOpacity> */}