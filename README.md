## 1. Installation

- **Install react-native-video module**
  - **Using npm:**
    `npm install git+https://github.com/sigmadrm/react-native-video.git`
  - **Using yarn:**
    `yarn add git+https://github.com/sigmadrm/react-native-video.git`

### 1.1 Android installation

1. Open folder `android` with Android studio
2. Edit file `android/build.gradle`

```java
allprojects {
    repositories {
        jcenter() {
            content {
                includeModule("com.yqritc", "android-scalablevideoview")
                includeModule("com.google.android.exoplayer", "extension-okhttp")
            }
        }

        maven {
            url "https://maven.sigmadrm.com"
        }
    }
}
```

3. Add player source in build configuration at file `android/settings.gradle`

```java
include ':react-native-video'
project(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android-exoplayer')
```

3. Sync Project with Gradle Files
4. Run app

## 1.2 iOS installation

1. Install library
   `cd ios && pod install && cd ..`
2. Run app

## 2. Config DRM info

```javascript
import Video from 'react-native-video';

...
// Config app info
Video.setMerchantId('MERCHANT_ID');
Video.setAppId('APP_ID');

...
// Render video element
<Video
    controls
    source={{
        uri: 'MANIFEST_URI',
        userId: 'USER_ID',
        sessionId: 'SESSION_ID',
    }}
    style={{height: 200}}
/>
```

| Property     |  Type  | Description                     |
| :----------- | :----: | :------------------------------ |
| MERCHANT_ID  | String | Merchant's identifier           |
| APP_ID       | String | Application's identifier        |
| MANIFEST_URI | String | Media source                    |
| USER_ID      | String | Merchant's user identifier      |
| SESSION_ID   | String | User session of merchant's user |
