import "./Post.css";

const Post = (props) => {
  return (
    <div className="postContainer" data-test={props.title}>
      <div className="postTitle">{props.title}</div>
      <div className="postImage">
        <img src={props.url} alt="" />
      </div>
      <div className="postAuthor">
        <div className="postAuthorName">{props.author}</div>
      </div>
    </div>
  );
};

export default Post;
