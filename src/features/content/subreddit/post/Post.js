import "./Post.css";

const Post = (props) => {
  return (
    <div className="postContainer">
      <div className="postTitle">{props.title}</div>
      <div className="postImage">
        <img src={props.url} alt="" />
      </div>
      <div className="postAuthor">{props.author}</div>
      <div className="num-comments">{props.num_comments}</div>
      <button className="toggle-comments">
        <img
          src="../../../../assets/comment.png"
          alt=""
          aria-role="toggle comments"
        />
      </button>
      <Comments showComments={props.showComments} comments={props.comments} />
    </div>
  );
};

export default Post;
