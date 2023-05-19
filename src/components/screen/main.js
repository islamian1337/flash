import React, {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import Lottie from 'lottie-react-native';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {useNavigation} from '@react-navigation/native';

const Main = ({ navigation }) => {
  // const navigation = useNavigation();
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#372C6A', '#372C6A']}
        style={styles.linearGradient}
        start={{x: 0.7, y: 0}}>
        <View style={styles.image}>
          <Lottie
             style={[
              {
                transform: [{scale: 1.6}],
              },
            ]}
            loop
            source={require('../../../assets/Flash Bible Lottie Animation.json')}
            progress={animationProgress.current}
          />
        </View>
        <Image
          style={styles.icon}
          source={require('../../../assets/images/icon.png')}
        />
        <TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate('Login');}}>
          <Text style={styles.buttonText}>Parent Login</Text>
        </TouchableOpacity>
        <Text
          style={styles.bottomText}
          onPress={() => {
            navigation.navigate('Signup');}}
        >
          CREATE A FREE ACCOUNT
        </Text>
      </LinearGradient>
    </View>
  );
};

const width_proportion = '100%';
const height_proportion = '100%';
let ScreenHeight = Dimensions.get('window').height;
const button_width = '70%';
const margin_buttom = '50%';
const margin_top = '40%';
const icon_margin_bottom = '15%';
const image_width = '70%';

var styles = StyleSheet.create({
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
  image: {
    marginTop: margin_top,
    width: image_width,
    height: 35,
    flex: 0.5,
    resizeMode: 'contain',
    marginBottom: 1,
  },
  icon: {
    height: 35,
    flex: 0.5,
    resizeMode: 'contain',
    marginBottom: icon_margin_bottom,
  },
  button: {
    backgroundColor: '#00E4C9',
    padding: 10,
    borderRadius: 50,
    height: 60,
    width: button_width,
  },
  buttonText: {
    fontSize: 22,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  bottomText: {
    color: '#DEDEDE',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 500,
    marginBottom: margin_buttom,
  },
});

export default Main;
