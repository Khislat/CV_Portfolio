# Portfolio ni GitHub va Vercel ga deploy qilish — step by step

Bu qo‘llanma loyihangizni avval GitHub ga, keyin Vercel da bepul host qilish uchun.

---

## Qism 1: GitHub ga yuklash

### 1.1 GitHub hisob ochish (agar yo‘q bo‘lsa)

1. [github.com](https://github.com) ga kiring.
2. **Sign up** bosing, email va parol kiriting, hisob yarating.
3. Emailni tasdiqlang.

### 1.2 Yangi repository (repo) yaratish

1. GitHub da o‘ng yuqorida **+** → **New repository**.
2. **Repository name:** `portfolio` yoki `my-portfolio` (o‘zingiz xohlagan nom).
3. **Public** tanlang.
4. **Add a README file** ni belgilamasangiz ham bo‘ladi (loyihangizda allaqachon fayllar bor).
5. **Create repository** bosing.

### 1.3 Loyihani kompyuterdan GitHub ga ulash

Loyiha papkangizda terminal (yoki Cursor terminal) oching.

**Agar loyihada Git hali ishlatilmagan bo‘lsa:**

```bash
# Git init (birinchi marta)
git init

# Barcha fayllarni qo‘shish
git add .

# Birinchi commit
git commit -m "Initial commit: portfolio"
```

**GitHub repo manzilini qo‘shish va push qilish:**

1. GitHub dagi yangi repo sahifasida yashil **Code** tugmasini bosing.
2. **HTTPS** tanlang va manzilni nusxalang (masalan: `https://github.com/USERNAME/portfolio.git`).
3. Terminalda (USERNAME va portfolio o‘rniga o‘zingizniki yozing):

```bash
# Remote qo‘shish (bitta marta)
git remote add origin https://github.com/USERNAME/portfolio.git

# Asosiy branch nomi (agar kerak bo‘lsa)
git branch -M main

# GitHub ga yuborish
git push -u origin main
```

4. GitHub da login/parol yoki **Personal Access Token** so‘rasa:
   - **Settings** → **Developer settings** → **Personal access tokens** dan token yarating.
   - Token ni parol o‘rniga kiriting.

**Tekshirish:** GitHub repo sahifasida loyiha fayllari ko‘rinishi kerak.

---

## Qism 2: Vercel da deploy qilish

### 2.1 Vercel hisob va loyiha

1. [vercel.com](https://vercel.com) ga kiring.
2. **Sign Up** → **Continue with GitHub** tanlang va GitHub bilan login qiling.
3. Vercel ga GitHub’dagi repolariga kirish ruxsatini bering (Authorize).

### 2.2 Loyihani import qilish

1. Vercel bosh sahifasida **Add New…** → **Project** bosing.
2. Ro‘yxatdan **portfolio** (yoki yaratgan repo nomingiz) ni toping → **Import** bosing.
3. **Configure Project** sahifasida:
   - **Framework Preset:** Next.js (avtomatik tanlangan bo‘lishi kerak).
   - **Root Directory:** bo‘sh qoldiring (loyiha ildizda bo‘lsa).
   - **Build Command:** `npm run build` (odatda default).
   - **Output Directory:** default qoldiring.
4. **Deploy** bosing.

### 2.3 Natija

1. Bir necha daqiqa kutiling; build tugagach **Visit** yoki berilgan linkni oching.
2. Sizga manzil beriladi: `https://portfolio-xxx.vercel.app` (yoki repo nomingizga o‘xshash).
3. Keyingi safar `git push` qilsangiz, Vercel avtomatik yangi deploy qiladi.

---

## Qisqa xulosa

| Qadam | Qayerda | Nima qilindi |
|-------|---------|----------------|
| 1 | GitHub | Hisob ochildi, yangi repo yaratildi |
| 2 | Terminal | `git init` → `git add .` → `git commit` → `git remote add origin` → `git push` |
| 3 | Vercel | GitHub bilan login → Import Project → Deploy |
| 4 | Vercel | Link olindi: `https://....vercel.app` |

---

## Keyingi yangilanishlar

Kodda o‘zgartirish qilgach, faqat:

```bash
git add .
git commit -m "Qandaydir o'zgarish"
git push
```

Vercel o‘zi yangi versiyani deploy qiladi.

---

## Muammolar bo‘lsa

- **Build xato:** Vercel da **Deployments** → oxirgi deploy → **Building** loglarini ko‘ring; xato qatorida ko‘rsatiladi.
- **Git push ishlamayapti:** `git remote -v` bilan `origin` manzilini tekshiring; noto‘g‘ri bo‘lsa `git remote set-url origin https://github.com/USERNAME/portfolio.git`.
- **Rasmlar ko‘rinmasa:** Rasmlar `public` papkada ekanligini tekshiring; Vercel `public` ni avtomatik serve qiladi.

Tugadi.
