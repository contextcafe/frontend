import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Protect routes for /bakers
  if (request.nextUrl.pathname.startsWith('/bakers') && 
      !request.nextUrl.pathname.startsWith('/bakers/login') && 
      !request.nextUrl.pathname.startsWith('/bakers/signup')) {
    if (!user) {
      // no user, potentially respond by redirecting the user to the login page
      const url = request.nextUrl.clone();
      url.pathname = '/bakers/login';
      return NextResponse.redirect(url);
    }
  }

  // Redirect signed in users away from login/signup
  if (user && (request.nextUrl.pathname === '/bakers/login' || request.nextUrl.pathname === '/bakers/signup')) {
      const url = request.nextUrl.clone();
      url.pathname = '/bakers';
      return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
