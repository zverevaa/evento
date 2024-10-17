import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/events/all", request.url));
}

export const config = {
    matcher: ["/events"],
};
