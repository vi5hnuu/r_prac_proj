import React, { useState } from 'react';
import './App.css';
import UserInputForm from './components/UserInputForm';
import UserList from './components/UserList';

function App() {
  const users = [
  ]
  const [userList, setUserList] = useState(users)

  function addUser(user) {
    setUserList((prevList) => { return [...prevList, user] })
  }
  return (
    <React.Fragment>
      <UserInputForm onUserAdd={addUser} />
      <UserList items={userList} />
    </React.Fragment>
  );
}

export default App;
