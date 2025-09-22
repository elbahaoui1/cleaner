import Link from "next/link";

export default function Success() {
  return (
    <div className="min-h-dvh gradient-bg flex items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 floating-animation"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3 floating-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="glass-effect rounded-3xl p-8 max-w-md mx-auto text-white shadow-2xl relative z-10">
        <div className="text-center">
          <div className="text-6xl mb-4 floating-animation">🎉</div>
          <h1 className="text-3xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">تم استلام طلبك بنجاح!</h1>
          <div className="w-20 h-1 gradient-secondary mx-auto mb-6 rounded-full"></div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3 p-3 bg-white/20 rounded-2xl">
              <span className="text-2xl">✅</span>
              <p className="text-sm">تم حفظ بياناتك بنجاح</p>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-3 bg-white/20 rounded-2xl">
              <span className="text-2xl">📞</span>
              <p className="text-sm">سنتواصل معك خلال 24 ساعة</p>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-3 bg-white/20 rounded-2xl">
              <span className="text-2xl">🚚</span>
              <p className="text-sm">التوصيل خلال 2-5 أيام عمل</p>
            </div>
          </div>
          
          <Link
            href="/"
            className="inline-block gradient-secondary rounded-2xl px-8 py-4 text-lg font-bold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            🏠 العودة للصفحة الرئيسية
          </Link>
          
          <p className="text-xs opacity-80 mt-6">شكراً لثقتك في متجر زينة</p>
        </div>
      </div>
    </div>
  );
}


