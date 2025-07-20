import { pool } from "@/utils/db";

export async function GET(req, { params }) {
  const { postid } = params;
  const result = await pool.query(
    "SELECT * FROM comments WHERE post_id = $1 ORDER BY id DESC",
    [postid]
  );
  return new Response(JSON.stringify(result.rows), { status: 200 });
}

export async function POST(req, { params }) {
  const { postid } = params;
  const body = await req.json();
  const { comment } = body;
  const result = await pool.query(
    "INSERT INTO comments (post_id, comment) VALUES ($1, $2) RETURNING *",
    [postid, comment]
  );
  return new Response(JSON.stringify(result.rows[0]), { status: 201 });
}
