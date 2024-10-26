import { NextResponse } from 'next/server';

export const config = {
  matcher: '/', // Applies middleware to the root route (add other protected paths as needed)
};

export function middleware(request) {
  // Access cookies from the request object
  const token = request.cookies.get('token')?.value;

  // Redirect to '/sign-in' if token is missing
  if (!token) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // If token exists, allow the request to proceed
  return NextResponse.next();
}
