import React, { useState } from "react"

import AddUser from "./Users/AddUser"
import UserList from "./Users/UserList"

const App = () => {
    const[userList, setUserList] = useState([])

    const addUserHandler = (uName, uAge) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {id: Math.random(), name: uName, age: uAge}]
        })
    }

    return(
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={userList} />
        </div>
    )
}

export default App
