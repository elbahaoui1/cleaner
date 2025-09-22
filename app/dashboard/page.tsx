import { prisma } from "@/lib/prisma";
import Link from "next/link";

type Order = {
  id: number;
  createdAt: string | Date;
  name: string;
  phone: string;
  address: string;
  quantity: number;
  price: number;
};

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const orders = await prisma.order.findMany({
    orderBy: { id: "desc" },
    take: 500,
    select: { id: true, createdAt: true, name: true, phone: true, address: true, quantity: true, price: true },
  });

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum: number, order: Order) => sum + order.price, 0);

  return (
    <div className="min-h-dvh gradient-bg p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 floating-animation"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3 floating-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 text-white">
          <h1 className="text-4xl font-bold mb-2">📊 لوحة التحكم</h1>
          <p className="text-lg opacity-90">إدارة طلبات متجر زينة</p>
          <div className="w-24 h-1 gradient-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-effect rounded-3xl p-6 text-white text-center">
            <div className="text-3xl mb-2">📦</div>
            <div className="text-2xl font-bold">{totalOrders}</div>
            <div className="text-sm opacity-80">إجمالي الطلبات</div>
          </div>
          
          <div className="glass-effect rounded-3xl p-6 text-white text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold">{totalRevenue.toLocaleString()}</div>
            <div className="text-sm opacity-80">ريال سعودي</div>
          </div>
          
          <div className="glass-effect rounded-3xl p-6 text-white text-center">
            <div className="text-3xl mb-2">📈</div>
            <div className="text-2xl font-bold">{totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0}</div>
            <div className="text-sm opacity-80">متوسط قيمة الطلب</div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="glass-effect rounded-3xl p-6 text-white shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">📋 آخر الطلبات</h2>
          
          {orders.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 opacity-50">📭</div>
              <p className="text-lg opacity-80">لا توجد طلبات حتى الآن</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="px-4 py-3 text-right font-semibold">#</th>
                    <th className="px-4 py-3 text-right font-semibold">التاريخ</th>
                    <th className="px-4 py-3 text-right font-semibold">الاسم</th>
                    <th className="px-4 py-3 text-right font-semibold">الجوال</th>
                    <th className="px-4 py-3 text-right font-semibold">العنوان</th>
                    <th className="px-4 py-3 text-right font-semibold">الكمية</th>
                    <th className="px-4 py-3 text-right font-semibold">السعر</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order: Order, index: number) => (
                    <tr key={order.id} className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'} hover:bg-white/20 transition-colors duration-200`}>
                      <td className="px-4 py-3 font-semibold text-yellow-300">#{order.id}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-xs">
                        {new Date(order.createdAt).toLocaleDateString('ar-SA', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="px-4 py-3 font-medium">{order.name}</td>
                      <td className="px-4 py-3 font-mono">{order.phone}</td>
                      <td className="px-4 py-3 max-w-[200px] truncate opacity-80" title={order.address}>
                        {order.address}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-200 font-bold">
                          {order.quantity}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-bold text-green-300">{order.price} رس</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block gradient-secondary rounded-2xl px-8 py-3 text-white font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            🏠 العودة للمتجر
          </Link>
        </div>
      </div>
    </div>
  );
}


