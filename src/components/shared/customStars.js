import React, {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const CustomRatingBar = ({defaultRating, handleClick}) => {
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // const handleClick = (item) => {
  //   setDefaultRating(item)
  // }
  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => handleClick(item)}>
            <Image
              style={styles.starImageStyle}
              source={
                item <= defaultRating
                  ? require('../../../assets/stars/star_filled.png')
                  : require('../../../assets/stars/star_empty.png')
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  starImageStyle: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
})

export default CustomRatingBar;