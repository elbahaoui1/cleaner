import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const password = (form.get("password") || "").toString();
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected) {
    return NextResponse.json({ error: "ADMIN_PASSWORD غير مضبوط" }, { status: 500 });
  }
  if (password !== expected) {
    return NextResponse.redirect(new URL("/admin?error=1", request.url));
  }
  const res = NextResponse.redirect(new URL("/dashboard", request.url));
  res.cookies.set("admin_auth", "1", { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 6 });
  return res;
}


