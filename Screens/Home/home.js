import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  SwipeRow,
  Icon,
  Item,
  Input,
  Button
} from "native-base";
import { TodoModal } from "../../Components";
import { TouchableOpacity, Modal } from "react-native";
import styles from "./styles";
// import { Firebase } from "../../Config";
export default class Login extends Component {
  state = {
    todos: [
      {
        title: "asd",
        description: "asd",
        date: 12312112,
        done: false
      }
    ],
    showModal: false,
    title: "",
    description: ""
  };

  //close the todo form modal
  handleOnCloseModal = () => {
    this.setState({ showModal: false });
  };

  //handle to add a new todo
  handleAddTodo = () => {
    const { title, description, todos } = this.state;
    if (title && description) {
      const obj = {
        title,
        description,
        date: new Date().getTime(),
        done: false
      };
      this.setState({ todos: todos.concat(obj), showModal: false });
    }
  };

  //handle to edit done status of todo
  handleTodoDone = key => {
    const { todos } = this.state;
    todos[key].done = !todos[key].done;
    this.setState({ todos });
  };

  //handle to remove a todo
  handleRemoveTodo = key => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter((value, index) => index != key) });
  };

  //method to render
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          {this.renderView()}
          {this.renderTodoModal()}
        </Content>
      </Container>
    );
  }
  //renders the main view
  renderView = () => {
    return (
      <View>
        <Text style={styles.brand}>Managment You Want</Text>
        <TouchableOpacity>
          <Button
            block
            danger
            style={styles.btnAddTodo}
            onPress={() => this.setState({ showModal: true })}
          >
            <Icon type="FontAwesome" name="plus" />
          </Button>
        </TouchableOpacity>
        {this.renderTodos()}
      </View>
    );
  };

  //render todo list
  renderTodos = () => {
    const { todos } = this.state;
    return (
      <View>
        {todos.map((todo, index) => (
          <SwipeRow
            key={todo.date + index}
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => this.handleTodoDone(index)}>
                <Icon active name="check" type="Entypo" />
              </Button>
            }
            body={
              <View>
                <View>
                  <Text
                    style={[
                      styles.todoTitle,
                      todo.done ? styles.todoTitleDone : null
                    ]}
                  >
                    {todo.title}
                  </Text>
                </View>
              </View>
            }
            right={
              <Button danger onPress={()=>this.handleRemoveTodo(index)}>
                <Icon active name="trash" />
              </Button>
            }
          />
        ))}
      </View>
    );
  };

  //rendet add todo modal
  renderTodoModal = () => {
    return (
      <Modal
        transparent
        animationType={"none"}
        visible={this.state.showModal}
        onRequestClose={() => {
          console.log("close modal");
        }}
      >
        <View style={styles.modalBackground}>
          <View style={[styles.Wrapper]}>
            <View style={styles.closeBtnCont}>
              <TouchableOpacity onPress={this.handleOnCloseModal}>
                <Icon
                  name="md-close-circle"
                  type="Ionicons"
                  style={styles.closeBtn}
                />
              </TouchableOpacity>
            </View>
            {this.renderAddTodoForm()}
          </View>
        </View>
      </Modal>
    );
  };

  //render add todo form
  renderAddTodoForm = () => {
    return (
      <View>
        <Item>
          <Input
            placeholder="Enter todo title"
            onChangeText={text => this.setState({ title: text })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Enter todo description"
            onChangeText={text => this.setState({ description: text })}
          />
        </Item>
        <View style={styles.modalActionContainer}>
          <View>
            <TouchableOpacity>
              <Button
                block
                danger
                style={styles.modalBtnAddTodo}
                onPress={this.handleAddTodo}
              >
                <Icon type="FontAwesome" name="plus" />
              </Button>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
}
