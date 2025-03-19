import { NextResponse } from "next/server";
import pool from "../db";

export async function GET() {
  const res = await pool.query(`SELECT * FROM users`);
  const users = res.rows;

  return NextResponse.json(users);
}
