import Post from "../post/Post";

function Posts({items}) {
    return (
        <div>
            {
                items.map(value => (<Post key={value.id} items={value}/>))
            }
        </div>
    );
}

export default Posts;