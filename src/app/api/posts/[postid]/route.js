import { pool } from "@/utils/db";

export async function GET(req, { params }) {
  const { postid } = params;
  const result = await pool.query("SELECT * FROM posts WHERE id = $1", [
    postid,
  ]);
  if (result.rows.length === 0) {
    return new Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify(result.rows[0]), { status: 200 });
}

export async function DELETE(req, { params }) {
  const { postid } = params;
  await pool.query("DELETE FROM posts WHERE id = $1", [postid]);
  return new Response(null, { status: 204 });
}
