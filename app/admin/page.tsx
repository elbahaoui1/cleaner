import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <div className="min-h-dvh gradient-bg flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 floating-animation"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3 floating-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="glass-effect rounded-3xl p-8 w-full max-w-sm text-white shadow-2xl relative z-10">
        <form action="/admin/login" method="post" className="space-y-6">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🔐</div>
            <h1 className="text-2xl font-bold gradient-accent bg-clip-text text-transparent">لوحة التحكم</h1>
            <div className="w-16 h-1 gradient-secondary mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium opacity-90">🔑 كلمة المرور</label>
            <input
              type="password"
              name="password"
              placeholder="ادخل كلمة المرور"
              className="w-full rounded-2xl bg-white/20 border border-white/30 px-4 py-3 text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 transition-all duration-300"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full rounded-2xl gradient-secondary text-white py-4 text-lg font-bold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            🚀 دخول
          </button>
          
          <div className="text-center">
            <Link 
              href="/" 
              className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300 underline"
            >
              ← العودة للمتجر
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}


