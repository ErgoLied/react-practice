function Comment({comment}) {
    return (
        <div>
            ({comment.email}) {comment.body}
        </div>
    );
}

export default Comment;