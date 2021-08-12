import Comment from "../comment/Comment";

function Comments({items}) {
    return (
        <div>
            {
                items.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
}

export default Comments;