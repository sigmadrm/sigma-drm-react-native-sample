/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Video from 'react-native-video';

Video.setMerchantId('vtvcabon2');
Video.setAppId('vtvcabon');
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Video
          source={{
            uri: 'https://sdrm-test.gviet.vn/public/vtv1.m3u8',
            userId: '448916936',
            sessionId: '445611895',
          }}
          style={{height: 200}}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
