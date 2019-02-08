import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import { Firebase } from "../../Config";
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Home" onPress={()=>this.props.navigation.replace("Home")} />
      </View>
    );
  }
}

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
  }
});
