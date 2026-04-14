# Najeeb S — Portfolio Website

A modern, animated portfolio built with **Vite + React JS**.  
Theme: **Orange & Black** — Dark Industrial Developer aesthetic.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## ✏️ How to Edit Your Portfolio

**All your personal data lives in ONE file:**

```
src/data/portfolio.js
```

Open it and you'll find clearly labeled sections:

| Section | What to edit |
|---|---|
| `personal` | Name, role, bio, email, phone, location, resume path |
| `social` | LinkedIn, GitHub, Instagram, Twitter URLs |
| `skills` | Add/remove skills with proficiency levels |
| `certifications` | Add new certs (title, issuer, date, description) |
| `projects` | Add new projects with links |
| `works` | Add logo/illustration images |
| `experience` | Add internships/training |

---

## 🖼️ Adding Your Resume

1. Place your resume PDF in the `public/resume/` folder
2. Name it `Najeeb_Resume.pdf` (or update the path in `personal.resumeUrl`)

---

## 🎨 Adding Design Works (Logos & Illustrations)

1. Place your images in `public/works/` folder  
   (e.g., `public/works/logo1.jpg`, `public/works/illustration1.png`)
2. Open `src/data/portfolio.js`
3. Find the `works` array and update `imageUrl` for each entry:
```js
{
  id: 1,
  title: "My Logo Design",
  category: "logo",
  description: "Brand identity for XYZ",
  imageUrl: "/works/logo1.jpg",  // ← add path here
  placeholder: false,             // ← set to false
}
```

---

## ➕ Adding a New Project

In `src/data/portfolio.js`, add to the `projects` array:

```js
{
  id: 3,                          // increment the id
  title: "My New Project",
  subtitle: "Project Type",
  description: "What it does.",
  tech: ["React", "Spring Boot"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/you/project",
  featured: false,
  color: "#FF6B00",
}
```

---

## 📧 Connecting Contact Form

The contact form currently simulates sending. To connect real email:

1. Sign up at [EmailJS](https://www.emailjs.com/) (free)
2. Create a service and template
3. In `src/components/Contact.jsx`, replace the `setTimeout` block with:

```js
import emailjs from '@emailjs/browser'

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { name: form.name, email: form.email, message: form.message },
  'YOUR_PUBLIC_KEY'
).then(() => {
  toast.success("Message sent!")
})
```

---

## 🔗 Updating Social Links

In `src/data/portfolio.js`, find the `social` object:

```js
export const social = {
  linkedin: "https://linkedin.com/in/YOUR-USERNAME",
  github: "https://github.com/YOUR-USERNAME",
  instagram: "https://instagram.com/YOUR-USERNAME",
}
```

---

## 🌐 Deploying (Free)

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo — it auto-detects Vite!

### Netlify
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

---

## 📁 Project Structure

```
najeeb-portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume/           ← Place your resume PDF here
│   └── works/            ← Place your logo/illustration images here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Works.jsx
│   │   ├── Certifications.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js  ← ✅ EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

Built with ❤️ using React + Vite
