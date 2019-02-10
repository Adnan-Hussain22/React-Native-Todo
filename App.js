import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Navigator from "./Navigation/appNavigator";
import store from "./Redux/store";
import { Provider} from "react-redux";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
    // <View ><Text>Hello World</Text></View>;
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
