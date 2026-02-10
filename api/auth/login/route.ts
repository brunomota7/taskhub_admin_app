import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    const response = await fetch(
        `${process.env.API_URL}/auth/login`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }
    );

    if (!response.ok) {
        return NextResponse.json(
            { message: "Credenciais inválidas" },
            { status: 401 }
        );
    }

    const { token } = await response.json();

    const res = NextResponse.json({ success: true });

    res.cookies.set("taskhub_admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 8,
    });

    return res;
}
