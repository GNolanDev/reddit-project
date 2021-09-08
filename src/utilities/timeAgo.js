const timeAgo = (utc_stamp) => {
  const secs_since = Math.round(Date.now() / 1000) - utc_stamp;
  if (secs_since < 60) {
    return "less than 1 minute ago";
  }
  if (secs_since < 60 * 60) {
    return `${Math.round(secs_since / 60)}m ago`;
  }
  if (secs_since < 24 * 60 * 60) {
    return `${Math.round(secs_since / (60 * 60))}h ago`;
  }
  return `${Math.round(secs_since / (24 * 60 * 60))}d ago`;
};

export default timeAgo;
