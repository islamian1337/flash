import React, {useState, useEffect} from 'react';

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
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';

const Topics = () => {
  const navigation = useNavigation();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [items2, setItems2] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#372C6A', '#372C6A']}
        style={styles.linearGradient}
        start={{x: 0.7, y: 0}}>
        <Text style={styles.introText}>CREATING A CUSTOM READING PLAN</Text>
        <Text style={styles.headingText1}>Topics I’d love them to</Text>
        <Text style={styles.headingText2}>learn about</Text>
        <View style={styles.row}>
          <View style={{width: '100%'}}>
            <DropDownPicker
              placeholderStyle={{
                color: 'white',
                fontWeight: 'bold',
              }}
              style={styles.countView}
              open={open1}
              value={value1}
              items={items1}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setItems1}
            />
          </View>
        </View>
        <View style={{width: '100%'}}>
          <DropDownPicker
            placeholderStyle={{
              color: 'white',
              fontWeight: 'bold',
            }}
            style={styles.countView}
            open={open2}
            value={value2}
            items={items2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}
          />
        </View>
        <TouchableOpacity
          style={styles.footButton}
          onPress={() => {
            navigation.navigate('PricePlan');
          }}>
          <Image source={require('../../../assets/images/Vector.png')} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const width_proportion = '100%';
const height_proportion = '100%';
let ScreenHeight = Dimensions.get('window').height;
const button_width = '80%';
const margin_buttom = '5%';
const margin_top = '35%';
const icon_margin_bottom = '15%';
const screen_margin_top = '50%';

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
    fontSize: 22,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginBottom: 5,
  },
  countView: {
    backgroundColor: '#4C3D92',
    textShadowColor: 'white',
    color: 'white',
    marginLeft: 40,
    marginRight: 40,
    padding: 5,
    borderRadius: 10,
    height: 45,
    width: button_width,
    fontSize: 8,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    marginBottom: margin_buttom,
  },
  dropdown2BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown: {
    position: 'absolute',
    right: 15,
    top: 25,
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
});

export default Topics;
