import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const runtime = "nodejs";

function calcPrice(quantity: number) {
  if (quantity === 1) return 169;
  if (quantity === 2) return 199;
  if (quantity === 3) return 239;
  return null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = (body?.name || "").toString().trim();
    const phone = (body?.phone || "").toString().trim();
    const address = (body?.address || "").toString().trim();
    const quantity = Number(body?.quantity);

    if (!name || !phone || !address || ![1, 2, 3].includes(quantity)) {
      return NextResponse.json({ error: "بيانات غير صالحة" }, { status: 400 });
    }

    const price = calcPrice(quantity);
    if (price == null) {
      return NextResponse.json({ error: "العدد غير مدعوم" }, { status: 400 });
    }

    const db = await getDb();
    await db.run(
      `INSERT INTO orders (name, phone, address, quantity, price) VALUES (?, ?, ?, ?, ?)`,
      [name, phone, address, quantity, price]
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/order error", err);
    return NextResponse.json({ error: "حدث خطأ" }, { status: 500 });
  }
}


