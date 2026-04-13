import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

async function handler(req: NextRequest, { params }: { params: { path: string[] } }) {
    // Reconstruct the exact Discord API URL safely
    const url = new URL(req.url);
    const discordUrl = `https://discord.com${url.pathname}${url.search}`;

    const headers = new Headers(req.headers);
    headers.set('host', 'discord.com');
    headers.delete('origin');
    headers.delete('referer');

    // Bypass Next.js caching entirely
    headers.delete('x-middleware-prefetch');
    headers.set('User-Agent', 'DiscordBot (https://nebublox.space, 1.0)');

    try {
        const hasBody = req.method !== 'GET' && req.method !== 'HEAD';
        const reqBody = hasBody ? await req.arrayBuffer() : undefined;

        const response = await fetch(discordUrl, {
            method: req.method,
            headers: headers,
            body: reqBody
        });

        const contentType = response.headers.get("content-type") || "";
        const isJson = contentType.includes("application/json");

        // If Discord hits us with an HTML rate limit block, cleanly convert it to JSON
        if (!isJson && response.status >= 400) {
            const text = await response.text();
            return NextResponse.json({
                message: "Proxy Rate Limit Error: Discord returned HTML.",
                code: 0,
                raw_error: text.substring(0, 500)
            }, { 
                status: response.status, 
                headers: { 
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Expose-Headers": "*"
                } 
            });
        }

        const newResponse = new NextResponse(response.body, response);
        newResponse.headers.set("Access-Control-Allow-Origin", "*");
        newResponse.headers.set("Access-Control-Expose-Headers", "*");
        return newResponse;

    } catch (err: any) {
        return NextResponse.json({ 
            message: "Internal Proxy Error", 
            code: 0, 
            raw_error: err.toString() 
        }, { status: 500 });
    }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
