"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("desc");

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`/api/posts?sort=${sort}`);
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, [sort]);

  async function handleDelete(id) {
    if (!confirm("Delete this post?")) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <main>
      <h1>All Posts</h1>
      <button onClick={() => setSort(sort === "asc" ? "desc" : "asc")}>
        Sort: {sort.toUpperCase()}
      </button>
      <Link href="/posts/new">Create Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.content}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
