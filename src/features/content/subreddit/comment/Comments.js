const Comments = (props) => {
  const { showComments, comments } = props;
  if (!showComments) {
    return;
  }

  return <div className="comments-container"></div>;
};
