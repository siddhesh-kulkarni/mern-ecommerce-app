# 🛒 MERN E-commerce Frontend (React + Vite)

This is the **frontend of a modern e-commerce app**, built using **React + Vite**. It’s designed for speed, scalability, and modularity — ideal for building robust shopping experiences.

> 💡 **Reference Design**:  
> [https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/](https://demos.codezeel.com/prestashop/PRS21/PRS210502/en/)

---

## 🔗 Live Demo Links

| Environment | URL                                                                 |
|-------------|----------------------------------------------------------------------|
| 🟢 Production | [https://mern-ecommerce-eight-zeta.vercel.app/](https://mern-ecommerce-eight-zeta.vercel.app/) |
| 🧪 Development | [https://mern-ecommerce-git-main-siddhesh-kulkarnis-projects.vercel.app/](https://mern-ecommerce-git-main-siddhesh-kulkarnis-projects.vercel.app/) |

---

## ⚙️ Getting Started

To create a similar project using Vite:

```bash
# 1. Scaffold the project
npm create vite@latest mern-ecommerce -- --template react

# 2. Move into the project directory
cd mern-ecommerce-webapp

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev


## 🧱 Folder Structure

mern-ecommerce-app/
├── public/
│ ├── images/ # Static images accessible via /images/*
│ └── locales/ # Translation files for i18n (multi-language support)
├── src/
│ ├── assets/ # App-specific assets (logos, icons, etc.)
│ ├── components/ # Reusable React components
│ ├── pages/ # Main views like Home, Product, Cart, etc.
│ ├── routes/ # React Router configuration (if used)
│ ├── App.jsx # Root app component
│ └── main.jsx # Entry point for React application
├── .eslintrc.cjs # ESLint configuration
├── vite.config.js # Vite build config
├── package.json # Project metadata and scripts
└── README.md # This file 📘

---

### 📁 Folder Highlights

- `public/images/` – For static assets like banners, hero images, and logos that don’t change often.
- `public/locales/` – Contains language JSON files for internationalization (e.g., `en.json`, `mr.json`). Useful with libraries like `i18next`.

---

Built with ❤️ using React + Vite
