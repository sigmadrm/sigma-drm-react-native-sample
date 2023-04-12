import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Video from 'react-native-video';

// Config app info
Video.setMerchantId('MERCHANT_ID');
Video.setAppId('APP_ID');

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* Render video element */}
      <Video
        controls
        source={{
          uri: 'MANIFEST_URI',
          userId: 'USER_ID',
          sessionId: 'SESSION_ID',
        }}
        style={{height: 200}}
      />
    </SafeAreaView>
  );
}

export default App;
