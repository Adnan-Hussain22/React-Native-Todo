import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  brand: {
    padding: 0,
    marginLeft: -5,
    marginRight: -5,
    backgroundColor: "#D9524F",
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    color: "white",
    paddingTop: 20
  },
  todoItem: {
    marginTop: 8,
    marginBottom: 8
  },
  todoTitle: {
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 20,
    fontWeight: "bold"
  },
  todoTitleDone: {
    textDecorationStyle: "dotted",
    textDecorationLine: "line-through",
    textDecorationColor: "black"
  },
  btnAddTodo: {
    margin: 5
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },
  Wrapper: {
    backgroundColor: "#FFFFFF",
    minHeight: 120,
    maxWidth: Dimensions.get("screen").width - 15,
    minWidth: Dimensions.get("screen").width - 40,
    borderRadius: 15,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    position: "relative"
  },
  closeBtnCont: {
    position: "absolute",
    top: -5,
    right: -5
  },
  closeBtn: {
    color: "red",
    fontSize: 25
  },
  modalActionContainer: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  },
  modalBtnAddTodo: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
});
export default styles;
