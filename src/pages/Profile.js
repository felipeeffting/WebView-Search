import React from 'react';
import { WebView } from 'react-native-webview'

function Profile({ navigation }) {
    const username = navigation.getParam('username');
    const insta = navigation.getParam('insta');

    if (insta) {
        return <WebView  style= {{ flex: 1}} source={{ uri: `https://www.instagram.com/${username}` }} />
    } else {
        return <WebView  style= {{ flex: 1}} source={{ uri: `https://github.com/${username}` }} />   
    }
}

export default Profile;