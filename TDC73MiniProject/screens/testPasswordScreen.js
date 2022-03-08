/*----------- THE PASSWORDSTRENGTH SCREEN-----------
This screen is used for the displaying the two different 
PasswordStrenght components. 
Different versions of the components are displayed.
There is two diffrend components, with diffrent ways
arranging the bar element and the text. 
----------------------------------------------------*/

import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import PassWordStrength from '../components/PasswordStrengthBig';  //
import PassTest from '../components/PasswordStrength';

export default function TestPassWordScreen(){
  const [password1, setPassWord1] = useState(''); 
  const [password2, setPassWord2] = useState(''); 

  return(
    <View style={styles.detailsbody}>
      <View style={styles.inputBox1}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 , width:200, borderRadius:10, backgroundColor:'white'}}
          placeholder= 'Password' 
          onChangeText={(val) => setPassWord1(val)}
        />
      </View>
      <PassTest passWord={password1} height={10} width={200} fontSize={20} backgroundColor='#E8E8E8' borderWidth={0} ></PassTest>
      <PassTest passWord={password1} height={20} width={180} fontSize={15} borderColor='black'></PassTest>
      <PassTest passWord={password1} height={20} width={280} fontSize={15} borderColor='black' oneColor='black' hiddenWhenNotUsed={true}></PassTest>
      <View style={styles.inputBox2}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 , width:200, borderRadius:10, backgroundColor:'white'}}
          placeholder= 'Password' 
          onChangeText={(val) => setPassWord2(val)}
        /> 
        <PassWordStrength passWord={password2} height={30} width={80} borderColor='grey' hiddenWhenNotUsed={true}> </PassWordStrength>
      </View>
    </View>
  )
}

// The styles for the elements
const styles = StyleSheet.create({
  detailsbody: {
    backgroundColor: 'white',
    width: '100%',
    height:'100%', 
    alignItems: 'center', 
  },
  inputBox1:{
    marginTop: 40,
    marginBottom: 5
  },
  inputBox2:{
    marginTop: 40,
    marginBottom: 5,
    flexDirection: 'row',
  }
});