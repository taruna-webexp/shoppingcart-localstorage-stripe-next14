import { NextResponse } from 'next/server'

export function middleware(request) {
    const url = request.nextUrl.clone();

    let isLogin = request.cookies.get('login')
    if (!isLogin) {
        if (request.nextUrl.pathname.startsWith("/filterapi")) {
            return NextResponse.rewrite(new URL("/", request.url));
        }
    } else {
        if (url.pathname === "/") {
            url.pathname = "/filterapi";
            return NextResponse.redirect(url);
        }
    }
    if (request.nextUrl.pathname.startsWith('/loginform')) {
        return NextResponse.rewrite(new URL('/', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.rewrite(new URL('/dashboard/user', request.url))
    }
}