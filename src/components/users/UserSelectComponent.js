import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.api";
import Posts from "../posts/Posts";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [postsOfId, setPostsofId] = useState(null);


    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    })

    const selectedUserId = ({target}) => {
        setPostsofId(target.value);
    }

    return (
        <div>
            <form onChange={selectedUserId}>
                <select>
                    {users.map(value => <option key={value.id} value={value.id}>{value.id} - {value.name}</option>)}
                </select>
            </form>
            <div>
                {postsOfId && <Posts id={postsOfId}/>}
            </div>
        </div>
    );
}