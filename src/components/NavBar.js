"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link> | <Link href="/posts">Posts</Link> |{" "}
      <Link href="/posts/new">Create New Post</Link>
    </nav>
  );
}
