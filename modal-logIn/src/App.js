import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UserList/UsersList";
function App() {
    const [userList, setUserList] = useState([]);
    const addUserHandler = (userName, age) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {name: userName, age: age, id: Math.random().toString()}];
        });
    };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
