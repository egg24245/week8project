"use client";

import { useState } from "react";

export default function CommentForm({ postId, onCommentAdded }) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!comment.trim()) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment }),
      });

      if (!res.ok) throw new Error("Failed to add comment");

      const newComment = await res.json();
      onCommentAdded(newComment);
      setComment("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Posting..." : "Add Comment"}
      </button>
    </form>
  );
}
