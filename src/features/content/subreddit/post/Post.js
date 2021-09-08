import "./Post.css";
import commenticon from "../../../../assets/comment.png";
import CommentList from "../comments/CommentList";
//import { flipCommentsStatus } from "../subredditSlice";
import { useDispatch } from "react-redux";
import testdata from "../../../../test-utils/test-data";

const Post = (props) => {
  const dispatch = useDispatch();
  const { postprops } = props;
  // postprops: id, title, author, url, num_comments, isLoading, error, comments, showCommment

  // TODO: dev code - remove once slice logic is added
  const conditionalCommentsRenderMock = () => {
    return (
      <CommentList
        comments={testdata.comments1.map((comment) => comment.data)}
      />
    );
  };

  const conditionalCommentsRender = () => {
    if (!postprops.showComment) {
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
    //dispatch(flipCommentsStatus(postprops.id));
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
              postprops.showComment ? " commentbutton-active" : ""
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
      {conditionalCommentsRenderMock()}
    </div>
  );
};

export default Post;
