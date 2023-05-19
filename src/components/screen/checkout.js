import React from 'react';
import { View, Button } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

const CheckOut = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const initializePaymentSheet = async () => {
    try {
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: 'YOUR_PAYMENT_INTENT_CLIENT_SECRET',
      });

      if (!error) {
        console.log('Payment sheet initialized successfully.');
      }
    } catch (error) {
      console.log('Error initializing payment sheet: ', error);
    }
  };

  const handlePayment = async () => {
    try {
      const { error } = await presentPaymentSheet();

      if (error) {
        console.log('Payment failed: ', error);
      } else {
        console.log('Payment successful.');
      }
    } catch (error) {
      console.log('Error presenting payment sheet: ', error);
    }
  };

  return (
    <View>
      <Button title="Initialize Payment Sheet" onPress={initializePaymentSheet} />
      <Button title="Pay" onPress={handlePayment} />
    </View>
  );
};

export default CheckOut;
