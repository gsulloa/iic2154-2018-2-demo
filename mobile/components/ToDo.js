import React, { Component } from "react"
import { Button } from "react-native"
import { Div, Ul } from "./container"
import { Title, Text } from "./text"
import { Form, Input} from "./form"


class ToDo extends Component {
  state = {
    list: [
      { id: 1, text: "element1"},
      { id: 2, text: "element2"},
      { id: 3, text: "element3"}
    ],
    text: '',
    id: 4,
  }

  handleWrite = e => {
    this.setState({
      text: e
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      list: [
        ...this.state.list,
        { id: this.state.id, text: this.state.text }
      ],
      id: this.state.id + 1,
      text: '',
    })
  }

  render() {
    console.log(this.state)
    return (
      <Div>
        <Title> ToDo </Title>
        <Form>
          <Input value={this.state.text} onChangeText={this.handleWrite} /> 
          <Button onPress={this.handleSubmit} title="submit" />
        </Form>
        <Ul>
          {this.state.list.map(element => (
            <Text key={element.id} important>{element.text}</Text>
          ))}
        </Ul>
      </Div>
    )
  }
}

export default ToDo