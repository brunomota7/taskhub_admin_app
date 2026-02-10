import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const token = (await cookies()).get("taskhub_admin_token")?.value;

    if (!token) {
        return NextResponse.json({}, { status: 401 });
    }

    return NextResponse.json({ authenticated: true });
}
