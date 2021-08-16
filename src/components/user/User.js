import {useEffect, useState} from "react";
import {getPosts} from "../../services/user.service";
import Posts from "../posts/Posts";

function User({user}) {

    return (
        <div>
            <h3>{user.id} {user.name}</h3>
            <Posts items={user.id}/>
        </div>
    );
}

export default User;