import { WebView } from "react-native-webview";

export default function App(props) {
  return <WebView 
  source={{ uri: "https://www.jozicoin.com/" }}
  style={{ marginTop: 20 }}  />
}