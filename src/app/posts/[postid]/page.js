"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CommentForm from "@/components/CommentForm";

export default function PostPage() {
  const postId = usePathname().split("/").pop();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [postRes, commentsRes] = await Promise.all([
        fetch(`/api/posts/${postId}`),
        fetch(`/api/posts/${postId}/comments`),
      ]);

      if (postRes.ok) {
        setPost(await postRes.json());
      }

      if (commentsRes.ok) {
        setComments(await commentsRes.json());
      }
    };

    fetchData();
  }, [postId]);

  const handleCommentAdded = (newComment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  if (!post) return <p>Loading post...</p>;

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <h2>Comments</h2>
      <CommentForm postId={postId} onCommentAdded={handleCommentAdded} />

      <ul>
        {comments.length === 0 ? (
          <li>No comments yet</li>
        ) : (
          comments.map((c) => <li key={c.id}>{c.comment}</li>)
        )}
      </ul>
    </main>
  );
}
