import React, {useState} from 'react';
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

const Counter = ({route, navigation}) => {
  const {email, password} = route.params;
  const [count, setCount] = useState(1);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  const submit = () => {
    if(count <= 0){
      alert("Invalid Count")
    }
    else{
    navigation.navigate('AgeRange', {
      email: email,
      password: password,
      count: count
    });
  }
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#372C6A', '#372C6A']}
        style={styles.linearGradient}
        start={{x: 0.7, y: 0}}>
        <Text style={styles.introText}>CREATING A CUSTOM READING PLAN</Text>
        <Text style={styles.headingText1}>How many kids will</Text>
        <Text style={styles.headingText2}>be using flash?</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={decrementCount}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <View style={styles.countView}>
            {count <= 0 ? (
              <Text style={styles.buttonText}>Invalid</Text>
            ) : (
              <Text style={styles.buttonText}>{count}</Text>
            )}
          </View>
          <TouchableOpacity style={styles.button} onPress={incrementCount}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            submit();
          }}
          style={styles.footButton}>
          <Image source={require('../../../assets/images/Vector.png')} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
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
  headingText1: {
    color: '#FFFEFE',
    fontFamily: 'Poppins',
    fontSize: 22,
    lineHeight: 34,
    fontWeight: 500,
  },
  headingText2: {
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
  },
  footButtonIcon: {
    fontSize: 22,
    color: '#FFFFFF',
  },
});

export default Counter;
