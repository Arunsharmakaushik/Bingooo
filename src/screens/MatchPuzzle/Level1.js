import { View, Text, Alert } from 'react-native'
import React from 'react'
import Header from '../../components/Header';
import MatchAlgo from './MatchAlgo';
const Level1 = ({ navigation, route }) => {
  const { name } = route?.params;
  const showAlert = () => {
    Alert.alert(
      'How to play?',
      `1. You can click on any box for selection and move the box by below buttons in any direction.\n\n2. You have to match the below puzzle.\n\n3. Whenever you press any box then the press counts increases and similarly when you move box in wrong direction then Mistakes count increment. \n\n4. You have only 10 chance to move the box into wrong direction. \n\n5. There are limited number of press (only 4 Press) considered to be Won.`,
      [
        {
          text: 'Understood!',
          onPress: () => console.log('OK Pressed')
        },
      ],
      { cancelable: false },
    );
  }
  return (
    <View style={{ flex: 1 }} >
      <Header showMessage={() => showAlert()} name={name} navigation={navigation} />
      <MatchAlgo matrixCount={3} />
    </View>
  )
}

export default Level1