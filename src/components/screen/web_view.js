import React from 'react';
import { WebView } from 'react-native-webview';

const  WebViewPage = () => {
    return (
      <WebView
        source={{
          uri: 'https://app.flashbible.com/explore',
        }}
        style={{flex: 1}}
      />
    );
  
}

export default WebViewPage;

