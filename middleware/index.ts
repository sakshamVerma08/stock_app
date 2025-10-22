import {getSessionCookie} from "better-auth/cookies";
import type { Middleware } from "better-auth";
import { NextRequest, NextResponse } from "next/server";
import { request } from "http";

export async function middleware(req: NextRequest){

    const sessionCookie = getSessionCookie(req);

    if(!sessionCookie){
        return NextResponse.redirect(new URL("/", request.url));
    }


    return NextResponse.next();
};

export const config = {
    matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sign-in|sign-up|assets).*)',
  ],
};

