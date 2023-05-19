import React, {useState, useCallback} from 'react';
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
//import Slider from '@react-native-community/slider';
import {RangeSlider} from '@sharcoux/slider';

const AgeRange = ({route, navigation}) => {
  const {email, password, count} = route.params;
  const [ageRange, setAgeRange] = useState({rangeLow: 0, rangeHigh: 8});

  const submit = () => {
    navigation.navigate('Goals', {
      email: email,
      password: password,
      count: count,
      ageRange: ageRange,
    });
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#372C6A', '#372C6A']}
        style={styles.linearGradient}
        start={{x: 0.7, y: 0}}>
        <Text style={styles.introText}>CREATING A CUSTOM READING PLAN</Text>
        <Text style={styles.headingText1}>What’s their age range?</Text>
        <View style={styles.row}>
          {/* <Slider
            style={{width: 300, height: 60}}
            minimumValue={ageRange.rangeLow}
            maximumValue={ageRange.rangeHigh}
            step={1}
            minimumTrackTintColor="#00E4C9"
            maximumTrackTintColor="#00E4C9"
          /> */}
          <RangeSlider
            range={[0, 12]} // set the current slider's value
            minimumValue={2} // Minimum value
            maximumValue={12}
            padding={80} // Maximum value
            step={1} // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
            minimumRange={0} // Minimum range between the two thumbs (defaults as "step")
            crossingAllowed={false} // If true, the user can make one thumb cross over the second thumb
            outboundColor="#4C3D92" // The track color outside the current range value
            inboundColor="#00E4C9" // The track color inside the current range value
            thumbTintColor="#00E4C9" // The color of the slider's thumb
            thumbStyle={undefined} // Override the thumb's style
            trackStyle={undefined} // Override the tracks' style
            minTrackStyle={undefined} // Override the tracks' style for the minimum range
            midTrackStyle={undefined} // Override the tracks' style for the middle range
            maxTrackStyle={undefined} // Override the tracks' style for the maximum range
            vertical={false} // If true, the slider will be drawn vertically
            inverted={false} // If true, min value will be on the right, and max on the left
            enabled={true} // If false, the slider won't respond to touches anymore
            trackHeight={4}
            trackWidth={200} // The track's height in pixel
            thumbSize={15} // The thumb's size in pixel
            thumbImage={undefined} // An image that would represent the thumb
            slideOnTap={true} // If true, touching the slider will update it's value. No need to slide the thumb.
            onValueChange={() => {}} // Called each time the value changed. The type is (range: [number, number]) => void
            onSlidingStart={undefined} // Called when the slider is pressed. The type is (range: [number, number]) => void
            onSlidingComplete={undefined} // Called when the press is released. The type is (range: [number, number]) => void
            CustomThumb={undefined} // Provide your own component to render the thumb. The type is a component: ({ value: number, thumb: 'min' | 'max' }) => JSX.Element
            // Add any View Props that will be applied to the container (style, ref, etc)
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.rangeNumber1}>4</Text>
          <Text style={styles.rangeNumber2}>8</Text>
        </View>
        <TouchableOpacity
          style={styles.footButton}
          onPress={() => {
            submit();
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
    marginTop: 20
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
  rangeNumber1: {
    color: '#FFFEFE',
    fontFamily: 'Poppins',
    fontSize: 22,
    lineHeight: 34,
    fontWeight: 500,
    marginRight: 0,
  },
  rangeNumber2: {
    color: '#FFFEFE',
    fontFamily: 'Poppins',
    fontSize: 22,
    lineHeight: 34,
    fontWeight: 500,
    marginLeft: 140
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

export default AgeRange;
