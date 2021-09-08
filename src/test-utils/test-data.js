// mock data for use in api testing
const topsubs = [
  {
    data: {
      id: "testid0001",
      display_name: "testdisplayname1",
      url: "/r/testurl0001",
      icon_img: "testimgurl0001",
    },
  },
  {
    data: {
      id: "testid0002",
      display_name: "testdisplayname2",
      url: "/r/testurl0002",
      icon_img: "testimgurl0002",
    },
  },
];

const posts1 = [
  {
    data: {
      id: "postid0001",
      author: "authorname0001",
      url: "posturl0001",
      title: "title0001",
      permalink: "/r/testurl0001/comments/abcdef/foo",
    },
  },
  {
    data: {
      id: "postid0002",
      author: "authorname0002",
      url: "posturl0002",
      title: "title0002",
      permalink: "/r/testurl0001/comments/abcdef/bar",
    },
  },
];

const posts2 = [
  {
    data: {
      id: "postid0003",
      author: "authorname0003",
      url: "posturl0003",
      title: "title0003",
      permalink: "/r/testurl0002/comments/abcdef/foo",
    },
  },
  {
    data: {
      id: "postid0004",
      author: "authorname0004",
      url: "posturl0004",
      title: "title0004",
      permalink: "/r/testurl0002/comments/abcdef/bar",
    },
  },
];

const comments1 = [
  {
    data: {
      id: "commentid0001",
      author: "commentauthor0001",
      created_utc: 1631098000,
      body: "Test Comment Body String 0001",
    },
  },
  {
    data: {
      id: "commentid0002",
      author: "commentauthor0002",
      created_utc: 1631098500,
      body: "Test Comment Body String 0002",
    },
  },
];

export default { topsubs, posts1, posts2, comments1 };
