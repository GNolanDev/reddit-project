import Post from "../post/Post";

const PostsList = () => {
  const posts = [
    {
      author: "testauthorname",
      title: "test title text",
      url: "https://i.redd.it/zwqg7xqu4uk71.jpg",
      id: 12345,
    },
  ]; // get from store by selector
  return (
    <div className="postsList">
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            url={post.url}
          />
        );
      })}
    </div>
  );
};

export default PostsList;
