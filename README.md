## Ocean Fisheries (Next.js + Express + JSON storage)

### المتطلبات
- Node.js 20+
- Docker Desktop

### تشغيل التطوير (بدون Docker)
1) جهّز ملفات البيئة:

- انسخ `apps/api/.env.example` إلى `apps/api/.env`
- انسخ `apps/web/.env.example` إلى `apps/web/.env.local`

2) ثبّت الحزم (pnpm):

```bash
pnpm install
```

3) شغّل الويب والباك معاً:

```bash
pnpm dev
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:4000/health`

### تشغيل Production بواسطة Docker

```bash
docker compose up --build
```

