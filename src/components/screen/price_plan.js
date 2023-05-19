import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Button
} from 'react-native';
import {Text, Card, Avatar, RadioButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import axios from 'axios';
import stripe from '../shared/stripe';

const PricePlan = ({ navigation }) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const [checked, setChecked] = React.useState('first');
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [show, setShow] = useState(0);
  const {confirmPayment} = useStripe();

  const plan1 = async () => {
    const amount = 200; // Amount in cents
    const token = 'sk_9d4f393ea158a8d798c1'; // Get the token from MemberStack

    try {
      const response = await axios.post('https://api.stripe.com/v1/charges', {
        amount,
        currency: 'usd',
        source: token,
      }, {
        headers: {
          Authorization: `Bearer ${stripe.getSecretKey()}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      // Handle successful payment
      console.log(response.data);
    } catch (error) {
      // Handle payment error
      console.log(error);
    }
  };

  const plan2 = async () => {
    const amount = 2000; // Amount in cents
    const token = 'sk_9d4f393ea158a8d798c1'; // Get the token from MemberStack

    try {
      const response = await axios.post('https://api.stripe.com/v1/charges', {
        amount,
        currency: 'usd',
        source: token,
      }, {
        headers: {
          Authorization: `Bearer ${stripe.getSecretKey()}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      // Handle successful payment
      console.log("Success",response.data);
      alert("Success",response.data)
    } catch (error) {
      // Handle payment error
      console.log(error);
      alrt("Error:", error)
    }
  };

  const handleClick1 = () => {
    setActive1(!active1);
    plan1();
  };

  const handleClick2 = () => {
    setActive2(!active2);
    plan2();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#372C6A', '#372C6A']}
        style={styles.linearGradient}
        start={{x: 0.7, y: 0}}>
        <Text style={styles.headingText1}>Choose a plan,</Text>
        <Text style={styles.headingText2}>& start your free trial.</Text>
        <View>
          <View style={styles.row}>
            <Image source={require('../../../assets/images/star.png')} />
            <Text style={styles.listText}>Unlimited Access</Text>
          </View>
          <View style={styles.row}>
            <Image source={require('../../../assets/images/star.png')} />
            <Text style={styles.listText}>Early Releases to new stories</Text>
          </View>
          <View style={styles.row}>
            <Image source={require('../../../assets/images/star.png')} />
            <Text style={styles.listText}>Guided Bible Studies</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            plan1()
          }}
          style={{
            marginTop: 10,
            shadowRadius: 5,
            color: 'white',
            height: card_height,
            width: card_width,
            borderWidth: 1,
            borderColor: '#4C3D92',
            borderRadius: 20,
            backgroundColor: active1 ? '#8871F0' : 'transparent',
          }}>
          <View style={styles.row}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
              style={styles.radio}
            />
            <View style={styles.textView}>
              <Text style={styles.headingText1}>Monthly</Text>
              <Text style={styles.cardText}>Pay monthly. Cancel anytime.</Text>
              <Text style={styles.cardTextDark}>30 Day Free Trial</Text>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.priceText}>
                $<Text style={styles.price}>2</Text>/mo
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleClick2();
          }}
          style={{
            marginTop: 10,
            shadowRadius: 5,
            color: 'white',
            height: card_height,
            width: card_width,
            borderWidth: 1,
            borderColor: '#4C3D92',
            borderRadius: 20,
            backgroundColor: active2 ? '#8871F0' : 'transparent',
          }}>
          <View style={styles.row}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
              style={styles.radio}
            />
            <View style={styles.textView}>
              <Text style={styles.headingText1}>Yearly</Text>
              <Text style={styles.cardText}>Pay monthly. Cancel anytime.</Text>
              <Text style={styles.cardTextDark}>30 Day Free Trial</Text>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.priceText}>
                $<Text style={styles.price}>20</Text>/yr
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text onPress={()=> {navigation.navigate('Checkout')}} style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        {/* {show == 1 || 2 ? <View>
        <CardField
          postalCodeEnabled={true}
          placeholder={{
            number: '4242 4242 4242 4242',
          }}
          style={{width: '100%', height: 50}}
        />
        <Button title="Pay" onPress={handlePayment} />
        </View>: <View></View>} */}
      </LinearGradient>
    </View>
  );
};

const width_proportion = '100%';
const height_proportion = '100%';
let ScreenHeight = Dimensions.get('window').height;
const button_width = '60%';
const margin_right1 = '40%';
const margin_right2 = '30%';
const margin_buttom = '10%';
const row_margin_left = '10%';
const card_width = '80%';
const card_height = '12%';
var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width_proportion,
    height: ScreenHeight,
  },
  row: {
    marginLeft: row_margin_left,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  listText: {
    color: '#8368FF',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 20,
    marginBottom: 10,
  },
  headingText1: {
    color: '#FFFEFE',
    fontFamily: 'Poppins',
    fontSize: 22,
    lineHeight: 34,
    fontWeight: 500,
  },
  textView: {
    marginLeft: 10,
    marginTop: 10,
  },
  priceView: {
    marginTop: 5,
    height: 150,
    marginLeft: 40,
  },
  price: {
    color: '#FFFEFE',
    fontSize: 20,
    lineHeight: 40,
    fontWeight: 500,
  },
  priceText: {
    color: '#8076AE',
  },
  cardText: {
    color: '#8076AE',
    fontSize: 8,
    lineHeight: 12,
  },
  cardTextDark: {
    color: '#8076AE',
    backgroundColor: '#1E1644',
    fontSize: 8,
    lineHeight: 12,
  },
  radio: {
    flex: 1,
    marginTop: 25,
  },
  headingText2: {
    color: '#FFFEFE',
    fontFamily: 'Poppins',
    fontSize: 22,
    lineHeight: 34,
    fontWeight: 500,
    marginBottom: margin_buttom,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height_proportion,
    width: width_proportion,
  },
  card: {
    marginTop: 10,
    shadowRadius: 0,
    color: 'white',
    height: card_height,
    width: card_width,
    borderWidth: 1,
    borderColor: '#4C3D92',
    borderRadius: 20,
  },
  image: {
    width: button_width,
    height: 35,
    flex: 0.5,
    resizeMode: 'contain',
    marginBottom: 1,
    shadowColor: 'white',
  },
  icon: {
    height: 35,
    flex: 0.5,
    resizeMode: 'contain',
  },
  input: {
    backgroundColor: '#190743',
    color: 'white',
    padding: 10,
    borderRadius: 20,
    height: 60,
    width: button_width,
    fontSize: 22,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#00E4C9',
    padding: 10,
    borderRadius: 50,
    height: 60,
    width: button_width,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 22,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  label1: {
    alignContent: 'flex-start',
    color: '#DEDEDE',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 10,
    marginRight: margin_right1,
  },
  label2: {
    alignContent: 'flex-start',
    color: '#DEDEDE',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 10,
    marginRight: margin_right2,
  },
  text: {
    color: '#8368FF',
    marginTop: 20,
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 10,
  },
});

export default PricePlan;
