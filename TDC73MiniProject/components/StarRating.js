/*-------- STAR RATING COMPONENT---------------------
  The star rating component displays the rating using 
  stars. The default is a rating with 5 stars but this can 
  be altered.

  Variables thet can be altered when calling the component:
    - numberOfStars= int
    - rating= double or int
    - starSize = int
    - borderWidth= int
    - borderColor= string
    - margin= int
    - backGroundColor= string
    - fillColor= string 
    - fillWhole= boolean
--------------------------------------------------*/

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Polygon, Defs, LinearGradient, Stop} from "react-native-svg";
 
const StarRating = ({numberOfStars, rating, starSize, borderWidth, borderColor,margin, backGroundColor, fillColor, fillWhole, fillHalf}) =>{
  
  // Variables
  let starNumbers = numberOfStars ? numberOfStars : 5;
  let starRating= rating ? rating : 0;
  let theBorderColor= borderColor ? borderColor: 'black';
  let theOpacity= backGroundColor ? 1: 0;
  let theFillColor= fillColor? fillColor: 'yellow';
  let theEmptyColor= backGroundColor? backGroundColor: 'black'
  let theBorderWidth= borderWidth != undefined ?  borderWidth : 3;
  let theStarSize= starSize? starSize: 30;
  let percentage= (starRating*100)/starNumbers;
  let fillOnlyWhole= fillWhole ? fillWhole: false;
  let theMargin= margin != undefined ? margin: 3;
  let fillOnlyHalfs= fillHalf? fillHalf: false;

  // Calculate the percentage for the stars
  let precentPerStar = 100/starNumbers;
  let nrOfFullStars= Math.floor(percentage/precentPerStar);
  let lastStarPrecent=0;
  if(percentage-(precentPerStar*nrOfFullStars) != 0){
      lastStarPrecent= Math.round(((percentage-(precentPerStar*nrOfFullStars))*100)/precentPerStar.toFixed(2));
  }
  if(fillOnlyWhole== true ){
    if(lastStarPrecent > 50){
       lastStarPrecent= 100;
    }
    else{
      lastStarPrecent=0;
    }
  }
  if(fillOnlyHalfs== true){
    if(lastStarPrecent < 25){
      lastStarPrecent=0;
    }
    else if( lastStarPrecent> 25 && lastStarPrecent<75){
      lastStarPrecent=50;
    }
    else{
      lastStarPrecent=100;
    }
  }
  
  // Set the percentage for each star
  let starPrecentageArray = [];
  for(let i = 0; i < starNumbers; i++) {
    if(i< nrOfFullStars){
      starPrecentageArray.push('100%');
    }
    else if(i == nrOfFullStars){
      starPrecentageArray.push(lastStarPrecent + '%');
    }
    else{
      starPrecentageArray.push('0%');
    }   
  }

  // The points of the star
  let starPoints= [ 50,0 ,61,35 ,98,35 ,68,57 ,79,91 ,50,70 ,21,91 ,32,57, 2,35 ,39,35 ];
  let theStarPoints= ' ';
  let scalFactor= theStarSize/100;
  for(var j=0; j < starPoints.length; j=j+2){
    theStarPoints= theStarPoints + (starPoints[j]*scalFactor) + ',' + (starPoints[j+1]*scalFactor) + ' ' ;
  }

  //Return the stars
  return(
    <View style={styles.allStars}>
      {starPrecentageArray.map((t, i) => { 
        return (
          <View key={i} style={[styles.container, { width: theStarSize, height: theStarSize, margin: theMargin}]}>
            <Svg height={theStarSize} width={theStarSize}>
              <Defs>
                <LinearGradient id="blue-gradient" x1="0" y1="0" x2="1" y2="0">
                  <Stop offset={t} stopColor={theFillColor} stopOpacity="1" />
                  <Stop offset={t} stopColor={theEmptyColor} stopOpacity={theOpacity} />
                </LinearGradient>
              </Defs>
              <Polygon
                points={theStarPoints} 
                fill= "url(#blue-gradient)"
                stroke={theBorderColor}
                strokeWidth={theBorderWidth}
              />
            </Svg>
          </View>  
        ); 
      })}
    </View>
  );
}

// The styles for the elements
const styles= StyleSheet.create({
  container:{
    padding: 0,     
    alignItems: 'center'
  },
  allStars:{
    flexDirection: 'row',
  }
});

export default StarRating;


