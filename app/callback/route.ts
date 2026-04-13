import { NextResponse } from 'next/server';

export const runtime = 'edge';

/**
 * Catch-all redirect for the /callback route
 * This ensures that if the user has the wrong redirect URI configured in Discord (missing /api/auth),
 * the request is still handled correctly.
 */
export async function GET(request: Request) {
    const url = new URL(request.url);
    const searchParams = url.searchParams.toString();
    
    // Redirect to the actual auth callback handler
    const redirectUrl = new URL(`/api/auth/callback?${searchParams}`, url.origin);
    
    return NextResponse.redirect(redirectUrl.toString());
}
