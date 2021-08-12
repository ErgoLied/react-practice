import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/User";

function Users() {
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(({data})=>setUsers([...data]));
    })
    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
}

export default Users;