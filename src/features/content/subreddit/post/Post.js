import "./Post.css";

const Post = (props) => {
  return (
    <div className="postContainer">
      <div className="postTitle">{props.title}</div>
      <div className="postImage">
        <img src={props.url} alt="" />
      </div>
      <div className="postAuthor">{props.author}</div>
    </div>
  );
};

export default Post;
