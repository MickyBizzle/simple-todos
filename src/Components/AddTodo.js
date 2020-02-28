import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormInput,
  FormTextarea
} from "shards-react";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.addTodo = props.addTodo;
  }

  handleChange = ({ target }) => {
    let { name, value } = target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addTodo(this.state);
    this.setState({ title: "", body: "" });
  };

  handleClear = () => {
    this.setState({ title: "", body: "" });
  };

  render() {
    return (
      <div className="flexContain">
        <Card
          style={{ maxWidth: "300px", width: "300px", marginBottom: "20px" }}
        >
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <CardTitle>
                <FormInput
                  placeholder="New Todo Title"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </CardTitle>
              <FormTextarea
                placeholder="New Todo body"
                name="body"
                onChange={this.handleChange}
                value={this.state.body}
              />
              <Button theme="secondary" onClick={this.handleClear}>
                Clear
              </Button>
              <Button style={{ float: "right" }} theme="primary" type="submit">
                Save
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
