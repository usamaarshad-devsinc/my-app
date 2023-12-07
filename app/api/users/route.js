import { NextResponse } from "next/server";

export async function GET(req) {
  console.log('request', req);

  return NextResponse.json({ data: 'ssdsds' })
}
