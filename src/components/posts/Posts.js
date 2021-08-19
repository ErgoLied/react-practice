import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/user.api";

export default function Posts({id}) {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts(id).then(({data}) => setPosts(data))
    }, [id])

  return (
    <div>
        {
            posts.map(value => <Post key={value.id} item={value}/>)
        }
    </div>
  );
}