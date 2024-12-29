
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') || '';

  const res = await fetch(`https://api.example.com/search?query=${query}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
