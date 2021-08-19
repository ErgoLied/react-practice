import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.api";
import Posts from "../posts/Posts";

export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(({data})=>setUsers([...data]));
    })
    let selectedUserId = (ev) => {
        let selectedUser = ev.target.value;
        console.log(selectedUser);
        let userId = selectedUser.split(' ')[0];
        console.log(userId);
    }
    return (
        <div>
            <form onChange={selectedUserId}>
                <select>
                    {users.map(value => <option key={value.id}>{value.id} - {value.name}</option>)}
                </select>
            </form>
            <Posts id={'1'}/>
        </div>
    );
}