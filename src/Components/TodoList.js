import React from "react";
import { Card, CardBody, CardTitle, Button } from "shards-react";

export default function TodoList(props) {
  const { todos, deleteTodo } = props;
  return (
    <div className="flexContain">
      {todos &&
        todos.map(({ title, body }, index) => {
          return (
            <Card
              key={index}
              style={{
                maxWidth: "300px",
                width: "300px",
                marginBottom: "20px"
              }}
            >
              <CardBody>
                <CardTitle>{title}</CardTitle>
                <p>{body}</p>
                <Button theme="danger" onClick={() => deleteTodo(index)}>
                  Delete
                </Button>
              </CardBody>
            </Card>
          );
        })}
    </div>
  );
}
