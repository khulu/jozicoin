import * as React from "react";
import { WebView } from "react-native-webview";
import {View,BackHandler,Platform,} from "react-native";

export default function App(props) {
  constructor(props) {
    super(props);
  }
  webView = {
    canGoBack: false,
    ref: null,
  }
  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }

  componentWillMount() {
    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === "android") {
      BackHandler.removeEventListener("hardwareBackPress");
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <WebView
          ref={(webView) => { this.webView.ref = webView; }}
          onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
          automaticallyAdjustContentInsets={false}
          source={{uri: "https://www.jozicoin.com/"}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          style={{marginTop: 25}}
        />
    </View>
    )
  }
  // return <WebView 
  // source={{ uri: "https://www.jozicoin.com/" }}
  // automaticallyAdjustContentInsets={false}
  // javaScriptEnabled={true}
  // domStorageEnabled={true}
  // startInLoadingState={true}
  // style={{ marginTop: 20 }}  />
}