// Proxy → NestJS backend
// NOTIFICATIONS module — owned by P4
<<<<<<< HEAD
import { NextRequest, NextResponse } from 'next/server';
 
const BACKEND = process.env.BACKEND_URL ?? 'http://localhost:3000';
 
async function proxy(req: NextRequest, path: string[]): Promise<NextResponse> {
  const url = `${BACKEND}/api/notifications/${path.join('/')}`;
 
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
 
  const auth = req.headers.get('authorization');
  if (auth) headers['authorization'] = auth;
 
  // Forward cookies as well (for cookie-based auth)
  const cookie = req.headers.get('cookie');
  if (cookie) headers['cookie'] = cookie;
 
  const res = await fetch(url, {
    method: req.method,
    headers,
    body: ['GET', 'HEAD'].includes(req.method) ? undefined : await req.text(),
  });
 
  const data: unknown = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
 
export async function GET(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  return proxy(req, params.path);
}
 
export async function POST(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  return proxy(req, params.path);
}
=======
import { NextRequest } from 'next/server';

const BACKEND = process.env.BACKEND_URL ?? 'http://localhost:3000';

async function proxy(req: NextRequest, params: { path: string[] }) {
  const path = params.path.join('/');
  const url = `${BACKEND}/api/notifications/${path}${req.nextUrl.search}`;
  return fetch(url, {
    method: req.method,
    headers: req.headers,
    body: req.method !== 'GET' ? req.body : undefined,
    // @ts-ignore
    duplex: 'half',
  });
}

export const GET = (req: NextRequest, { params }: { params: { path: string[] } }) => proxy(req, params);
export const POST = (req: NextRequest, { params }: { params: { path: string[] } }) => proxy(req, params);
export const PUT = (req: NextRequest, { params }: { params: { path: string[] } }) => proxy(req, params);
export const DELETE = (req: NextRequest, { params }: { params: { path: string[] } }) => proxy(req, params);
>>>>>>> 8fcd563a8d8dba5a8f175ac1f49f740c081411eb
