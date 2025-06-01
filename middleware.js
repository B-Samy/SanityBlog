import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { withClerkMiddleware } from "@clerk/nextjs/server";


// export default withClerkMiddleware({
//   publicRoutes: ["/"  ],
// });


const isProtectedRoute = createRouteMatcher(['/sign-in(.*)']);

export default clerkMiddleware((auth, req) => {
  if (!auth.userId && isProtectedRoute(req)) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  
  return NextResponse.next();
});
// export default clerkMiddleware(async (auth, req) => {
//     if (isProtectedRoute(req)) await auth.protect()
// })

// export const config = {
//   matcher: [
//       // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }


export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};