import { pool } from "../../../utils/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const sort = searchParams.get("sort") === "asc" ? "ASC" : "DESC";

    const result = await pool.query(`SELECT * FROM posts ORDER BY id ${sort}`);
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const { title, content } = await req.json();
    if (!title || !content) {
      return new Response(
        JSON.stringify({ error: "Missing title or content" }),
        { status: 400 }
      );
    }

    const result = await pool.query(
      "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );

    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
