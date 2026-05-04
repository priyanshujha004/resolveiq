<<<<<<< HEAD
import { NextRequest, NextResponse } from 'next/server';

const BACKEND = 'http://localhost:3000';

async function handler(req: NextRequest, { params }: { params: { path: string[] } }) {
  const path = params.path.join('/');
  const url = new URL(req.url);
  const backendUrl = `${BACKEND}/api/reports/${path}${url.search}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  const auth = req.headers.get('authorization');
  if (auth) headers['Authorization'] = auth;

  const init: RequestInit = {
    method: req.method,
    headers,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = await req.text();
  }

  const res = await fetch(backendUrl, init);
  const data = await res.text();

  return new NextResponse(data, {
    status: res.status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export { handler as GET, handler as POST, handler as PATCH, handler as DELETE };
=======
// Proxy → NestJS backend
// REPORTS module — owned by P3
import { NextRequest } from 'next/server';

const BACKEND = process.env.BACKEND_URL ?? 'http://localhost:3000';

async function proxy(req: NextRequest, params: { path: string[] }) {
  const path = params.path.join('/');
  const url = `${BACKEND}/api/reports/${path}${req.nextUrl.search}`;
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
