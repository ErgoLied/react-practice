import Post from "../post/Post";
import {getPosts} from "../../services/user.service";
import {useEffect, useState} from "react";

function Posts({items}) {
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts(items).then(({data})=>setPosts([...data]));
    })
    return (
        <div>
                {posts.map(value => (<Post key={value.id} items={value}/>))}
        </div>
    );
}

export default Posts;