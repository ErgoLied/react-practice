import {useEffect, useState} from "react";
import {getPosts} from "../../services/user.service";
import Posts from "../posts/Posts";

function User({user}) {
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts(user.id).then(({data})=>setPosts([...data]));
    })
    return (
        <div>
            <h3>{user.id} {user.name}</h3>
            <div>
                <Posts items={posts}/>
            </div>
        </div>
    );
}

export default User;