import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput } from 'react-native';

export default function App() {

const [number, setNumber] = React.useState('')
const [rand, setRand] = React.useState('')
const [clickCount, setClickCount] = React.useState(0)
const [edit, setEdit] = React.useState(true)

function getRandomNum(max){
return JSON.stringify(Math.floor(Math.random() * max))
}
console.log('number', number)
console.log('rand', rand)
console.log('click count', clickCount)

function setNum(num){
if(num > 0 && num < 100){
setNumber(num)
}
else{
setNumber('')
}
// else if (num == NaN){
// setNumber('')
// }
// else {
// Alert.alert('Error')
// }
}



function handlePress(){
// setRand(getRandomNum(100));
setClickCount(clickCount => clickCount + 1)
if(clickCount < 1){
setRand(getRandomNum(6));
setEdit(!edit)
// setClickCount(0)
}
// if(clickCount > 0){
// setNum('');
// setClickCount(0)
// }
}


function resetAll(){
setEdit(true)
setClickCount(0)
setRand('')
setNumber('')
}

if(number > 0 && rand > 0){
if(number == rand){
Alert.alert('You are a winner!')
}
}

  return (
    <View style={styles.container}>
    <Text>INSERT ANY NUMBER FROM 0 TO 5</Text>
          <SafeAreaView>
            <TextInput
            style = {styles.input}
            onChangeText={setNum}
            value = {number}
            keyboardType='numeric'
            maxLength={2}
            editable = {edit}
            />

          </SafeAreaView>
      <Text>Your number is: {number}</Text>
      <Text>Generate Number:</Text>
      <Button
      title = "Click Here!"
      onPress={handlePress}
      // onPress={() => Alert.alert(getRandomNum(100))}
      />

      <Text>Random number: {rand}</Text>
      <Button
      title = "PLAY AGAIN"
      onPress={resetAll}
      // onPress={() => Alert.alert(getRandomNum(100))}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

