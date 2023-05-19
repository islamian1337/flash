import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import CustomRatingBar from '../shared/customStars';

const Goals = () => {
  const [maxRating, setMaxrating] = useState(0);
  const [literacyStars, setLiteracyStars] = useState(0);
  const [memoryStars, setMemoryStars] = useState(0);
  const [readingStars, setReadingStars] = useState(0);
  const [color, setColor] = useState('indigo');
  const navigation = useNavigation();


  
  const literacyStarsPress = (rating) => {
    setLiteracyStars({
      starCount: rating,
    });
  };
  const memoryStarsPress = (rating) => {
    setMemoryStars({
      starCount: rating,
    });
  };
  const readingStarsPress = (rating) => {
    setReadingStars({
      starCount: rating,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#372C6A', '#372C6A']}
        style={styles.linearGradient}
        start={{x: 0.7, y: 0}}>
        <Text style={styles.introText}>CREATING A CUSTOM READING PLAN</Text>
        <Text style={styles.headingText}>What are your goals?</Text>
        <Text style={styles.ratingText}>Biblical Literacy</Text>
        <CustomRatingBar handleClick={literacyStarsPress} defaultRating={literacyStars} />
        <Text style={styles.ratingText}>Bible Memory</Text>
        <CustomRatingBar handleClick={memoryStarsPress} defaultRating={memoryStars} />
        <Text style={styles.ratingText}>Daily Reading</Text>
        <CustomRatingBar handleClick={readingStarsPress}  defaultRating={memoryStars} />
        <TouchableOpacity
          style={styles.footButton}
          onPress={() => {
            navigation.navigate('Topics');
          }}>
          <Image source={require('../../../assets/images/Vector.png')} />
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

const width_proportion = '100%';
const height_proportion = '100%';
let ScreenHeight = Dimensions.get('window').height;
const button_width = '40%';
const margin_buttom = '15%';
const margin_top = '55%';
const icon_margin_bottom = '15%';
const screen_margin_top = '40%';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width_proportion,
    height: ScreenHeight,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height_proportion,
    width: width_proportion,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#00E4C9',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 32,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginBottom: 5,
  },
  countView: {
    backgroundColor: '#4C3D92',
    color: 'white',
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    borderRadius: 10,
    height: 60,
    width: button_width,
    fontSize: 22,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
  introText: {
    color: '#8368FF',
    marginTop: screen_margin_top,
    lineHeight: 14,
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 20,
  },
  ratingText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 24,
    /* identical to box height */

    textAlign: 'center',

    color: '#FFFEFE',
  },
  headingText: {
    color: '#FFFEFE',
    fontFamily: 'Poppins',
    fontSize: 22,
    lineHeight: 34,
    fontWeight: 500,
    marginBottom: margin_buttom,
  },
  footButton: {
    backgroundColor: '#4C3D92',
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: margin_top,
    marginBottom: 100
  },
  footButtonIcon: {
    fontSize: 22,
    color: '#FFFFFF',
  }
});

export default Goals;
