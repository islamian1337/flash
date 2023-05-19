import React from 'react';
import RootNavigator from './components/navigation/SwitchNavigator';
import RootProvider from './providers';
import { StripeProvider } from '@stripe/stripe-react-native';

const stripePublishableKey = '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';

function App() {
  return <RootNavigator />;
}

function ProviderWrapper() {
  return (
    <StripeProvider publishableKey={stripePublishableKey}>
      <RootProvider>
      <App />
      </RootProvider>
    </StripeProvider>
  );
}

export default ProviderWrapper;
