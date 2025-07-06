# 🌹 Quote Generator

A simple, beautiful, and responsive **Quote Generator Web App** built using **Next.js 15**, **Tailwind CSS**, and **ShadCN UI**. Users can select a topic and view inspirational quotes displayed in a carousel with elegant styling.

---

## ✨ Features

- 🌸 Stylish UI with Rose color palette and glassmorphism
- 📚 Dropdown to select topics like Success, Friendship, Coding, etc.
- 🎯 Displays 3 quotes randomly from the selected topic
- 🔁 Carousel view with previous/next navigation
- ⚛️ Built using Next.js 15 with App Router and modern best practices
- 🌀 Fully responsive and mobile-friendly
- 🧠 Uses local JSON data for quote content

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom rose theme
- **UI Components**: [ShadCN UI](https://ui.shadcn.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```
Nexium_Bismah_Quote_Generator/
└── internship/
    └── assignment-1/
        ├── .next/
        ├── node_modules/
        ├── public/
        ├── src/
        │   ├── app/
        │   │   ├── globals.css
        │   │   ├── layout.tsx
        │   │   └── page.tsx
        │   ├── components/
        │   │   ├── ui/
        │   │   │   ├── button.tsx
        │   │   │   ├── card.tsx
        │   │   │   ├── form.tsx
        │   │   │   ├── input.tsx
        │   │   │   ├── label.tsx
        │   │   │   └── select.tsx
        │   │   ├── QuoteForm.tsx
        │   │   └── QuoteCard.tsx
        │   ├── data/
        │   │   └── quotes.json
        │   └── lib/
        │       └── utils.ts
        ├── .gitignore
        ├── components.json
        ├── eslint.config.mjs
        ├── next-env.d.ts
        ├── next.config.ts
        ├── package.json
        ├── package-lock.json
        ├── pnpm-lock.yaml
        ├── tailwind.config.js
        ├── postcss.config.js
        ├── tsconfig.json
        └── next.config.ts

```

---

## 🚀 Getting Started

### 1. **Clone the repository**

```
git clone https://github.com/your-username/Nexium_Bismah_Assign1.git
cd Nexium_Bismah_Assign1/internship/assignment-1
```

### 2. **Install dependencies**
Make sure you are inside the ```assignment-1/``` folder and have [pnpm](https://pnpm.io/) installed:

```
pnpm install
```

### 3. **Run the development server**

```
pnpm dev
```

The app will be running at http://localhost:3000

---

## 📦 Build for Production

```
pnpm build
pnpm start
```

---

## 🧪 Key Files

- ```quotes.json```: Contains categorized quotes with ```text``` and ```author``` fields

- ```QuoteForm.tsx```: Dropdown component for selecting topics

- ```QuoteCard.tsx```: UI card component showing quote + author

- ```page.tsx```: Main app logic and carousel rendering

---

## 📸 Screenshot

![image_alt](https://github.com/bismah-nasir/Nexium_Bismah_Quote_Generator/blob/b20eb1a88f0f7d2b2fbb9b17e3d99f88eda68cfc/internship/assignment-1/public/quote_generator.PNG)

---

## 🌐 Live Demo
You can view the live version of the **Quote Generator App** deployed on Vercel here:

https://nexium-bismah-quote-generator.vercel.app/

---

## 💖 Credits
Built by **Bismah Nasir** as part of Nexium Internship

Made with 💗 using **Next.js**, **Tailwind CSS**, and **DaisyUI**

---
