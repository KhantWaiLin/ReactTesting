import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {addUser , deleteUser,updateUser} from "./features/User";
import { useState } from 'react';

function App() {

  const userList = useSelector((state)=>state.users.value); 
  const dispatch = useDispatch(); 

  const [name,setName] = useState("");
  const [userName,setUserName] = useState("");


  return (
    <div className="App">
      <div className='addUser'>
        <input type="text" onChange={(event)=>{setName(event.target.value)}} placeholder="Name..." />
        <input type="text" onChange={(event)=>{setUserName(event.target.value)}} placeholder='userName...'/>
        <button onClick={()=>{
          dispatch(addUser(
            {id:userList[userList.length -1].id+1,
            name,
            userName}))
        }}>Add User</button>
      </div>
      <div className='displayUser'>
        {userList.map((user)=>{
          return <div>
             <h1>{user.name}</h1>
             <h3>{user.userName}</h3>
             <input
              onChange={(event)=>{
                setUserName(event.target.value);
              }}
              type="text"
              placeholder="UserName .." />
             <button onClick={()=>{
              dispatch(updateUser({id:user.id,userName}))
             }}>Update User Name</button>

             <button onClick={()=>{
              dispatch(deleteUser({id: user.id}))
             }}>Delete User Name</button>

          </div>
        })}
      </div>
    </div>
  );
}

export default App;
