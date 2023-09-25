import { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import ToDoList from './layout/ToDoList';

function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <ToDoList />
      </main>
    </Fragment>
  );
}

export default App;
