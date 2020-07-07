import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import useForm from '../../hooks/form.js';

function TodoForm(props) {
  const todoInput = useForm('ToDo');
  const assignInput = useForm('assign to what');
  const rateInput = useForm('rate');
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit({
      text: todoInput.value,
      assignee: assignInput.value,
      difficulty: rateInput.value || 3,
    });
  };
  return (
    <>
      <Card className="p-5 mr-5">
        <Card.Title>Add Item</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row>
              <Form.Label>
                <span>To Do Item</span>
                <Form.Control
                  {...todoInput}
                />
              </Form.Label>
            </Row>
            <Row>
              <Form.Label>
                <span>Assigned To</span>
                <Form.Control
                  type="text"
                  {...assignInput}
                />
              </Form.Label>
            </Row>
            <Row>
              <Form.Label>
                <span>Difficulty Rating</span>
                <Form.Control
                  className="w-5"
                  {...rateInput}
                  type="range"
                  min="1"
                  max="5"
                />
              </Form.Label>
            </Row>
            <Button variant="primary" type="submit">
              Add Item
            </Button>
          </Container>
        </Form>
      </Card>
    </>
  );
}

export default TodoForm;
