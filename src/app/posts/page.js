"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/posts");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    }
    fetchPosts();
  }, []);

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.length === 0 && <li>No posts found</li>}
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
