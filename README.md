# Senior Full-Stack Engineer Portfolio

Zamonaviy, bitta sahifali portfolio sayt — Senior Full-Stack Engineer va System Architect uchun.

## Texnologiyalar

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animatsiyalar)

## Talablar

- **Node.js 18.17** yoki yuqori (masalan, [nodejs.org](https://nodejs.org) dan LTS o‘rnating)

## Ishga tushirish

```bash
# Bog'liqliklar
npm install

# Development (localhost:3000)
npm run dev

# Production build
npm run build
npm start
```

## O‘zgartirishlar

- **Profil rasmi**: About bo‘limida o‘ng tomonda chiqishi uchun rasmingizni `public/profile.jpg` nomi bilan saqlang (yoki `profile.png` bo‘lsa `About.tsx` da `src="/profile.jpg"` ni `src="/profile.png"` qilib o‘zgartiring).
- **Email / LinkedIn / Resume**: `components/Contact.tsx` ichida `your.email@example.com` va linklarni o‘z email va profilingizga almashtiring.
- **Ism**: Testimonials va boshqa joylarda kerak bo‘lsa ismingizni qo‘shing.
- **Ranglar / shriftlar**: `tailwind.config.ts` va `app/globals.css` da mavjud.

## Bo‘limlar

- Hero — asosiy sarlavha va CTA
- About — E-7, Koreya, High-Availability
- Resume — karyera timeline
- Services — ERP, AI, Infrastructure
- Skills — Frontend, Backend, DevOps, Tools
- Case Study — ERP loyihasi (Challenge, Solution, Impact)
- Testimonials — sharhlar
- Contact — email, LinkedIn, Resume

Sayt mobil va desktop uchun responsive.
