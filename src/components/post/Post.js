import Comments from "../comments/Comments";
import {useEffect, useState} from "react";
import {getComments} from "../../services/user.service";
import "./Post.css"

function Post({items}) {
    let [comms, setComms] = useState([]);
    useEffect(()=>{
        getComments(items.id).then(({data})=>setComms([...data]));
    })
    return (
        <div className={'posts'}>
            {items.id} - {items.title} - read more...
            <div className={'comms'}>
                <Comments items={comms}/>
            </div>
        </div>
    );
}

export default Post;