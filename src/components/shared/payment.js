import React from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';
import stripe from './stripe'; // Path to your stripe.js file

const PaymentScreen = () => {
  const handlePayment = async () => {
    const amount = 1000; // Amount in cents
    const token = 'TOKEN_FROM_MEMBERSTACK'; // Get the token from MemberStack

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

  return (
    <View>
      <Button title="Pay" onPress={handlePayment} />
    </View>
  );
};

export default PaymentScreen;
