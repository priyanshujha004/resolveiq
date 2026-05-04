// Proxy → NestJS backend
// AUTH module — owned by P1
<<<<<<< HEAD
<<<<<<< HEAD

=======
2
3
>>>>>>> 8fcd563a8d8dba5a8f175ac1f49f740c081411eb
=======

>>>>>>> 5c84a16f7138b750bcae536206fe50d6b0e034f0
import { NextRequest } from 'next/server';

const BACKEND = process.env.BACKEND_URL ?? 'http://localhost:3000';

<<<<<<< HEAD
<<<<<<< HEAD
async function proxy(req: NextRequest, { params }: { params: { path: string[] } }) {
  const path = params.path.join('/');
  const url = `${BACKEND}/api/auth/${path}${req.nextUrl.search}`;

  const headers = new Headers(req.headers);
  headers.delete('host');

  const res = await fetch(url, {
    method: req.method,
    headers,
    body: req.method !== 'GET' ? req.body : undefined,
    // @ts-expect-error Node fetch duplex option
    duplex: 'half',
  });

  const responseHeaders = new Headers(res.headers);
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers: responseHeaders,
  });
}

export const GET = (req: NextRequest, ctx: { params: { path: string[] } }) =>
  proxy(req, ctx);
export const POST = (req: NextRequest, ctx: { params: { path: string[] } }) =>
  proxy(req, ctx);
export const PUT = (req: NextRequest, ctx: { params: { path: string[] } }) =>
  proxy(req, ctx);
export const DELETE = (req: NextRequest, ctx: { params: { path: string[] } }) =>
  proxy(req, ctx);
=======
async function proxy(req: NextRequest, params: { path: string[] }) {
=======
async function proxy(req: NextRequest, { params }: { params: { path: string[] } }) {
>>>>>>> 5c84a16f7138b750bcae536206fe50d6b0e034f0
  const path = params.path.join('/');
  const url = `${BACKEND}/api/auth/${path}${req.nextUrl.search}`;

  const headers = new Headers(req.headers);
  headers.delete('host');

  const res = await fetch(url, {
    method: req.method,
    headers,
    body: req.method !== 'GET' ? req.body : undefined,
    // @ts-expect-error Node fetch duplex option
    duplex: 'half',
  });

  const responseHeaders = new Headers(res.headers);
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers: responseHeaders,
  });
}

<<<<<<< HEAD
export const GET = (req: NextRequest, { params }: { params: { path: string[] } }) => proxy(req, params);
export const POST = (req: NextRequest, { params }: { params: { path: string[] } }) => proxy(req, params);
export const PUT = (req: NextRequest, { params }: { params: { path: string[] } }) => proxy(req, params);
export const DELETE = (req: NextRequest, { params }: { params: { path: string[] } }) => proxy(req, params);
>>>>>>> 8fcd563a8d8dba5a8f175ac1f49f740c081411eb
=======
export const GET = (req: NextRequest, ctx: { params: { path: string[] } }) =>
  proxy(req, ctx);
export const POST = (req: NextRequest, ctx: { params: { path: string[] } }) =>
  proxy(req, ctx);
export const PUT = (req: NextRequest, ctx: { params: { path: string[] } }) =>
  proxy(req, ctx);
export const DELETE = (req: NextRequest, ctx: { params: { path: string[] } }) =>
  proxy(req, ctx);
>>>>>>> 5c84a16f7138b750bcae536206fe50d6b0e034f0
