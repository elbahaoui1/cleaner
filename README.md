متجر زينة - صفحة هبوط باللغة العربية مع لوحة تحكم للطلبات (Next.js + SQLite)

## Getting Started

التشغيل:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- أنشئ ملف `.env.local` وضع التالي:

```
ADMIN_PASSWORD=ضع_كلمة_المرور_هنا
```

- شغل الخادم ثم افتح `http://localhost:3000` للمتجر و`/dashboard` للوحة التحكم.

الميزات:

- صفحة هبوط متوافقة مع الهاتف، اختيار الكمية (1/2/3) بأسعار: 169 / 199 / 239 رس
- صورة المنتج: ضع ملف صورة باسم `product.jpg` داخل مجلد `public/`
- حفظ الطلبات في SQLite (`data.sqlite` في جذر المشروع)
- لوحة تحكم محمية بكلمة مرور من البيئة (`/admin` للدخول، `/dashboard` للعرض)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
