/*------------------ PASSWORD STENGTH COMPONENT--------------------
  The passwordstrength component calculates the password's 
  strenght on a scal from 0-4.  The strenght is displayed 
  with the help of a bar and a word, for example "weak" or "strong".

  Variables thet can be altered when calling the component:
    - passWord = string
    - height= int 
    - width= int
    - borderColor= string 
    - borderwidth= int
    - backgroundColor= string
    - hidenWhenNotUsed= boolean
    - oneColor= string
------------------------------------------------------------------*/

import React, {useState, useEffect} from 'react';
import {StyleSheet,View,Text} from 'react-native';

// Constans
const checkSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const checkNumber = /\d/;
const checkLowerCase = /[a-z]/;
const checkUpperCase = /[A-Z]/;
const status=[ 'To short!','Weak!', 'Ok', 'Good', 'Strong'];

const PassWordStrengthBig = ({passWord, height, width, borderColor, borderWidth, backgroundColor, hiddenWhenNotUsed, oneColor}) =>{

    // Varibles
    let thePassWord= passWord? passWord: '';
    let heightAll = height ? height : 90;
    let widthAll = width ? width : 200;
    let theBarColor = backgroundColor ? backgroundColor : '#00000000';
    let theBorderColor = borderColor ? borderColor : 'black';
    let hide= hiddenWhenNotUsed? hiddenWhenNotUsed: false;
    let theBorderWidth= borderWidth!= undefined ? borderWidth: 2;
    let colors= oneColor ? [ oneColor, oneColor,oneColor, oneColor, oneColor] : ['#FF0000','#FF0000','#FFFF00', '#00E8F9','#38f101'] ; 
    const [strength, setStrength] = useState(0);
    const [barWidth, setBarWidth] = useState('0%'); 

    // Get the strenght of the password (0-4)
    useEffect(() => {
        let totalStrength = 0;

        if(checkSpecialChars.test(passWord)) {
          totalStrength++; 
        }
        if(checkNumber.test(passWord)) {
          totalStrength++; 
        }
        if(checkLowerCase.test(passWord) && checkUpperCase.test(passWord)) {
          totalStrength++; 
        }
        if(passWord.length > 8) {
          totalStrength++; 
        }
        else{
            totalStrength=0;
        }
    
        setStrength(totalStrength);
        setBarWidth((totalStrength*25) + '%');
    }, [passWord]);
    
    //What is returned
    if(hide == true && thePassWord==''){
        return(
            <View style={[styles.container, { width: widthAll, height: heightAll,}]}></View>
        );
    }
    else{
        return(
            <View style={[styles.container, { width: widthAll, height: heightAll,}]}>
                <Text style={[styles.theText, {color: colors[strength], fontSize: heightAll*0.45}]}>
                    {(passWord.length == 0 ) ? '' : status[strength]}
                </Text>
                <View style={[styles.theBar, {width:widthAll-10,height:heightAll*0.23, 
                    backgroundColor:theBarColor,borderColor:theBorderColor, borderWidth:theBorderWidth}]}>
                    <View style={[styles.strengthBar, {backgroundColor: colors[strength]}, {width: barWidth }]}></View>
                </View>
            </View>
        );
    }
};

// The styles for the elements
const styles= StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems:'center',
    },
    theBar:{
        borderRadius:5,
    },
    strengthBar: {
        position: 'absolute',
        height: '100%',   
        borderRadius: 3 
    },
    theText:{
        fontWeight: 'bold'
    }
});

export default PassWordStrengthBig;

