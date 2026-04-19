# دليل تسليم مشروع غراس (Gheras) 🌿

تم بحمد الله تجهيز المشروع بالكامل للرفع والتسليم النهائي. إليك تفاصيل ما تم إنجازه والخطوات المتبقية.

## ✅ ما تم إنجازه فنيًا:
1. **ربط الـ Backend**: تم التأكد من أن الـ Backend مرفوع بنجاح على Railway ويعمل مع قاعدة بيانات MongoDB Atlas.
2. **إعدادات الـ API**: تم تحديث ملف `environment.prod.ts` ليشير إلى رابط الـ API المباشر: `https://gheras-production-d634.up.railway.app/api`.
3. **تثبيت الـ Routing**: تم إنشاء/تحديث ملف `vercel.json` لإصلاح مشكلة الـ (404 Error) عند عمل تحديث (Refresh) للفرونت إيند.
4. **تجهيز السيرفر**: الـ Backend مهيأ لاستقبال الطلبات من رابط الـ Frontend الجديد (CORS Setup).
10. **ديناميكية الروابط**: تم تحويل كافة الروابط الصلبة (Hardcoded URLs) مثل روابط Google Auth لتستخدم متغيرات البيئة (Environment Variables).

## ⚙️ متغيرات البيئة المطلوبة (Railway Backend):
يجب التأكد من إضافة المتغيرات التالية في لوحة تحكم Railway للـ Backend:
- `BACKEND_URL`: رابط الباك إيند (مثلاً: `https://gheras-production-d634.up.railway.app`)
- `CLIENT_URL`: رابط الفرونت إيند (بعد رفعه على Vercel أو Railway)
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`: لعمل تسجيل الدخول بـ Google.
- `SECRET_KEY`: مفتاح التشفير للـ JWT.
- `MONGO_URI`: رابط قاعدة البيانات.

## 🚀 الخطوات النهائية للرفع (الفرونت إيند):

1. **ارفع التعديلات للـ GitHub**:
   ```bash
   git add .
   git commit -m "Final deployment configurations"
   git push
   ```

2. **الربط بـ Vercel**:
   - اذهب إلى [Vercel.com](https://vercel.com).
   - اضغط على **Add New Project**.
   - اختر مستودع (Repository) مشروع `gheras`.
   - **تنبيه هام**: في إعدادات المشروع (Configure Project)، ابحث عن **Root Directory** واضغط على **Edit** واختر مجلد **frontend**.
   - اضغط على **Deploy**.

---

## 🛠️ روابط هامة:
- **رابط الـ Backend الحالي**: `https://gheras-production-d634.up.railway.app/`
- **لوحة تحكم Railway**: [Railway Dashboard](https://railway.app/)

---
**المشروع الآن جاهز تماماً للعمل.. بالتوفيق في التسليم!** 🎉
