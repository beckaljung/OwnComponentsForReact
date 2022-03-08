/*----------- THE STARRATING SCREEN-----------
This screen is used for the displaying the STARRATTING component. 
Different versions of the component are displayed. 
----------------------------------------------------*/

import React , {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import DisplayStarRating from '../components/StarRating';

export default function TestStarScreen(){
    const [password1, setPassWord1] = useState(0); 
    return(
        <View style={styles.body}>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 , width:200, borderRadius:10, backgroundColor:'white'}}
              placeholder= 'Star Rating' 
              onChangeText={(val) => setPassWord1(val)}
            />
            <DisplayStarRating rating={password1} numberOfStars={5} fillColor='black'></DisplayStarRating>
            <DisplayStarRating rating={password1} numberOfStars={5} fillColor='yellow' borderWidth={0} backGroundColor='#D3D3D3' fillHalf={true}></DisplayStarRating>
            <DisplayStarRating rating={password1} numberOfStars={5} fillColor='red' borderColor='red' starSize={50} fillWhole={true}></DisplayStarRating>
            <DisplayStarRating rating={password1} numberOfStars={10} fillColor='black' starSize={20}></DisplayStarRating>
        </View>
    )
}

// The styles for the elements
const styles = StyleSheet.create({
    body: {
      backgroundColor: 'white',
      width: '100%',
      height:'100%', 
      alignItems: 'center',
      paddingTop: 40
    },
  });
