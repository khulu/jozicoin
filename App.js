import * as React from "react";
import { WebView } from "react-native-webview";
import {View,BackHandler,Platform,} from "react-native";

export default function App(props) {
  return <WebView 
  source={{ uri: "https://www.jozicoin.com/" }}
  automaticallyAdjustContentInsets={false}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  startInLoadingState={true}
  style={{ marginTop: 20 }}  />
}