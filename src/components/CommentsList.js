export default function CommentsList({ comments }) {
  if (!comments.length) return <p>No comments yet.</p>;

  return (
    <ul>
      {comments.map(({ id, comment, created_at }) => (
        <li key={id}>
          <p>{comment}</p>
          <p>{new Date(created_at).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  );
}
