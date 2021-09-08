import timeAgo from "../../../../utilities/timeAgo";

const CommentList = (props) => {
  const { comments } = props;

  return (
    <div className="comments-container">
      {comments.map((comment) => {
        return (
          <div className="comment" key={comment.id}>
            <div className="comment-info">
              <div className="comment-author">{comment.author}</div>
              <div className="comment-timeago">
                {timeAgo(comment.created_utc)}
              </div>
            </div>
            <div className="comment-body">{comment.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
