import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SettingsContext } from '../../context/site.js';

function TodoList(props) {

    const SiteSettings = useContext(SettingsContext);

  return (
    <ul>
      {props.list.map((item) => (
        <li className={`complete-${item.complete.toString()}`} key={item._id}>
          <Card style={{ width: '22rem' }}>
            <Card.Body>
              <div className="topname">
                <h3 onClick={() => props.handleComplete(item._id)}>
                  {`${item.complete ? 'complete' : 'pending'}`}
                </h3>
                <Card.Title
                  className="name"
                  variant="border-bottom border-dark"
                >
                  {item.assignee}
                </Card.Title>
                <button
                  className="xButton"
                  onClick={() => props.handleDelete(item._id)}
                >
                  x
                </button>
              </div>
              <div className="contentInformation"> {item.text} </div>
              <div className="diff"> Difficulty : {item.difficulty}</div>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
