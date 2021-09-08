import "./Post.css";
import commenticon from "../../../../assets/comment.png";
import CommentList from "../comments/CommentList";
import { flipCommentsStatus, getComments } from "../subredditSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Post = (props) => {
  const dispatch = useDispatch();
  const { postprops, index } = props;
  // postprops: id, title, author, url, num_comments, isLoading, error, comments, showCommment

  useEffect(() => {
    if (postprops.showComments === true) {
      dispatch(getComments(postprops.id));
    }
  }, [dispatch, postprops.showComments, postprops.id]);

  const conditionalCommentsRender = () => {
    if (!postprops.showComments) {
      return;
    }

    if (postprops.isLoading) {
      return <div className="loading-comments">loading comments...</div>;
    }

    if (postprops.error) {
      return <div className="error-comments">could not find comments</div>;
    }

    if (postprops.num_comments < 1) {
      return <div className="msg-nocomment">no comments on this post yet</div>;
    }

    return <CommentList comments={postprops.comments} />;
  };

  const formattedNumComments = () => {
    if (postprops.num_comments < 1000) {
      return postprops.num_comments;
    }
    if (postprops.num_comments < 1000000) {
      return `${(postprops.num_comments / 1000).toFixed(1)}k`;
    }
    return `${(postprops.num_comments / 1000000).toFixed(1)}M`;
  };

  const handleCommentToggle = (e) => {
    dispatch(flipCommentsStatus(index));
  };

  return (
    <div className="postContainer">
      <div className="postTitle">{postprops.title}</div>
      <div className="postImage">
        <img src={postprops.url} alt="" />
      </div>
      <div className="postinfo-container">
        <div className="postAuthor">{postprops.author}</div>
        <div className="comments-info">
          <div className="num-comments">{formattedNumComments()}</div>
          <button
            className={`toggle-comments${
              postprops.showComments ? " commentbutton-active" : ""
            }`}
            onClick={handleCommentToggle}
          >
            <img
              src={commenticon}
              alt=""
              aria-hidden="true"
              focusable="false"
            />
            <span className="visually-hidden">Comments</span>
          </button>
        </div>
      </div>
      {conditionalCommentsRender()}
    </div>
  );
};

export default Post;
