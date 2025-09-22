"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const price = quantity === 1 ? 169 : quantity === 2 ? 199 : 239;

  async function submitOrder(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, address, quantity, price }),
      });
      if (!res.ok) throw new Error("فشل إرسال الطلب");
      window.location.href = "/success";
    } catch (err: any) {
      setError(err.message || "حدث خطأ غير متوقع");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-dvh gradient-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 floating-animation"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3 floating-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10">
        <header className="px-6 py-8 text-center text-white">
          <div className="floating-animation">
            <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">✨ متجر زينة ✨</h1>
            <p className="text-lg opacity-90 font-medium">اطلب المنتج الآن والدفع عند الاستلام</p>
            <div className="w-20 h-1 gradient-secondary mx-auto mt-4 rounded-full"></div>
          </div>
        </header>

        <main className="px-6 py-4 max-w-lg mx-auto">
          {/* Product hero image */}
          <section className="glass-effect rounded-3xl overflow-hidden mb-6 shadow-2xl">
            <div className="relative w-full h-64 sm:h-80">
              <Image
                src="/product.png"
                alt="صورة المنتج - متجر زينة"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 600px"
                className="object-contain"
              />
            </div>
          </section>

          {/* Product showcase */}
          <section className="glass-effect rounded-3xl p-6 mb-6 text-white shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">🎁 العروض الحصرية</h2>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setQuantity(1)}
                className={`relative rounded-2xl py-6 px-3 text-center transition-all duration-300 transform hover:scale-105 ${
                  quantity === 1 
                    ? "gradient-secondary text-white shadow-lg scale-105 pulse-glow" 
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
               
                <div className="font-bold text-sm">قطعة واحدة</div>
                <div className="text-xl font-bold mt-1">169</div>
                <div className="text-xs opacity-80">ريال سعودي</div>
                {quantity === 1 && <div className="absolute -top-2 -right-2 w-6 h-6 gradient-accent rounded-full flex items-center justify-center text-xs">✓</div>}
              </button>
              
              <button
                onClick={() => setQuantity(2)}
                className={`relative rounded-2xl py-6 px-3 text-center transition-all duration-300 transform hover:scale-105 ${
                  quantity === 2 
                    ? "gradient-secondary text-white shadow-lg scale-105 pulse-glow" 
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <div className="font-bold text-sm">قطعتان</div>
                <div className="text-xl font-bold mt-1">199</div>
                <div className="text-xs opacity-80">ريال سعودي</div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-bold">وفر 139 رس</div>
                {quantity === 2 && <div className="absolute -top-2 -right-2 w-6 h-6 gradient-accent rounded-full flex items-center justify-center text-xs">✓</div>}
              </button>
              
              <button
                onClick={() => setQuantity(3)}
                className={`relative rounded-2xl py-6 px-3 text-center transition-all duration-300 transform hover:scale-105 ${
                  quantity === 3 
                    ? "gradient-secondary text-white shadow-lg scale-105 pulse-glow" 
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <div className="font-bold text-sm">ثلاث قطع</div>
                <div className="text-xl font-bold mt-1">239</div>
                <div className="text-xs opacity-80">ريال سعودي</div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">وفر 268 رس</div>
                {quantity === 3 && <div className="absolute -top-2 -right-2 w-6 h-6 gradient-accent rounded-full flex items-center justify-center text-xs">✓</div>}
              </button>
            </div>
            
            <div className="text-center mt-6 p-4 bg-white/20 rounded-2xl">
              <div className="text-lg font-medium">المجموع الكلي</div>
              <div className="text-3xl font-bold text-cyan-300">{price} ريال</div>
            </div>
          </section>

          {/* Order form */}
          <form onSubmit={submitOrder} className="glass-effect rounded-3xl p-6 space-y-5 text-white shadow-2xl">
            <h3 className="text-xl font-bold text-center mb-4">📝 معلومات التوصيل</h3>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium opacity-90">👤 الاسم الكامل</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl bg-white/20 border border-white/30 px-4 py-3 text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 transition-all duration-300"
                placeholder="اكتب اسمك الكامل هنا"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium opacity-90">📱 رقم الجوال</label>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-2xl bg-white/20 border border-white/30 px-4 py-3 text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 transition-all duration-300"
                placeholder="05xxxxxxxx"
                inputMode="tel"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium opacity-90">📍 عنوان التوصيل</label>
              <textarea
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-2xl bg-white/20 border border-white/30 px-4 py-3 text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 transition-all duration-300 resize-none"
                rows={3}
                placeholder="المدينة - الحي - الشارع - أقرب معلم"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-2xl">
                <p className="text-red-100 text-sm text-center">⚠️ {error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-2xl gradient-secondary text-white py-4 text-lg font-bold disabled:opacity-60 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  جاري الإرسال...
                </span>
              ) : (
                "🚀 تأكيد الطلب"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <div className="glass-effect rounded-2xl p-4 text-white">
              <p className="text-sm opacity-90 mb-2">✅  السعر شامل  والشحن</p>
              <p className="text-sm opacity-90 mb-2">🚚 شحن مجاني لجميع المناطق</p>
              <p className="text-sm opacity-90">⏰ التوصيل خلال 2-3 أيام عمل</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
