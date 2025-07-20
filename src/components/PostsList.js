"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/posts?sort=desc");
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  if (!posts.length) return <p>No posts found.</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
