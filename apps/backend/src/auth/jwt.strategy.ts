<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Request } from 'express';

interface JwtPayload {
  sub: string;
  email: string;
  role: string;
  tenantId: string;
  name: string | null;
}

function extractFromCookie(req: Request): string | null {
  if (req?.cookies?.access_token) {
    return req.cookies.access_token;
  }
  return null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: extractFromCookie,
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  validate(payload: JwtPayload) {
    return {
      sub: payload.sub,
      email: payload.email,
      role: payload.role,
      tenantId: payload.tenantId,
      name: payload.name,
    };
  }
}
=======
// TODO P1: JWT strategy — read from cookie named 'access_token'
import { Injectable } from '@nestjs/common';
@Injectable()
export class JwtStrategy {}
>>>>>>> 8fcd563a8d8dba5a8f175ac1f49f740c081411eb
