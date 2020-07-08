import React from 'react';

import SettingsContext from './context/site.js';
import ToDo from './components/todo/todo.js';

export default function App(props) {
  return (
    <>
    <SettingsContext>
      <ToDo />
    </SettingsContext>
    </>
  );
}

