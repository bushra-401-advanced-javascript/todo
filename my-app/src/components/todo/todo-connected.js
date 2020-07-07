import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import useAjax from '../../hooks/ajax.js';
import './todo.scss';

function ToDo(props) {
  const [list, setList] = useState([]);
  const [getElement, postElement, putElement, deleteElement] = useAjax(setList);

  const addItem = (item) => {
    item.complete = false;
    let url = `https://api401-todo.herokuapp.com/todo`;
    postElement(url, item);
  };

  const toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let z = list.map((listItem) =>
        listItem._id === item._id ? item : listItem
      );
      setList([...z]);

      let data = item;
      let url = `https://api401-todo.herokuapp.com/todo`;

      putElement(url, data);
    }
  };

  useEffect(() => {
    document.title = `TO DO LIST ${
      list.filter((item) => !item.complete).length
    }`;
  }, [list]);

  useEffect(() => {
    getElement('https://api401-todo.herokuapp.com/todo');
  }, [list]);

  const togglehandleDelete = (id) => {
    let idx = list.findIndex((i) => i._id === id);
    list.splice(idx, 1);
    setList([...list]);
    let url = `https://api401-todo.herokuapp.com/todo`;
    deleteElement(url, id);
  };

  return (
    <main>
      <header>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>HOME</Navbar.Brand>
        </Navbar>
      </header>
      <Navbar variant="dark" bg="dark" className="mt-4 ml-5 mr-5">
        <Navbar.Brand>
          There are {list.filter((item) => !item.complete).length} Items To
          Complete
        </Navbar.Brand>
      </Navbar>
      <Container className="ml-5 mr-5 mt-5">
        <Row className="ml-5">
          <div>
            <TodoForm handleSubmit={addItem} />
          </div>
          ​
          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              handleDelete={togglehandleDelete}
            />
          </div>
        </Row>
      </Container>
    </main>
  );
}

export default ToDo;
