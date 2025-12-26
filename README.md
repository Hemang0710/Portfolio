# Data & Software Developer Portfolio

A modern, professional portfolio website for an Entry-Level Data & Software Developer based in Ontario, Canada. Built with Next.js, TypeScript, and Tailwind CSS, featuring interactive data visualizations, machine learning showcases, and a clean, recruiter-friendly design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Interactive Dashboards**: Data visualizations using Recharts
- **Smooth Animations**: Framer Motion for professional, subtle animations
- **Dark Mode**: Full dark mode support with theme persistence
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter cards
- **Accessible**: ARIA labels and semantic HTML throughout
- **Responsive**: Mobile-first design that works on all devices
- **Production Ready**: Optimized for deployment on Vercel

## 📋 Pages

1. **Home** - Hero section with value proposition and call-to-action
2. **About Me** - Professional summary, timeline, and tech stack visualization
3. **Projects** - Four detailed project showcases:
   - FitFeast (Health & Nutrition App)
   - Event Attendance Prediction (ML)
   - Food Drive Demand Forecasting (Volunteer)
   - Real Estate Analytics Platform
4. **Data & ML Showcase** - Interactive dashboards and ML pipeline explanation
5. **Resume** - ATS-friendly resume layout with download option
6. **Contact** - Contact form with validation

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Recharts** - Chart library for data visualization
- **Lucide React** - Icon library

### Backend
- **Next.js API Routes** - Serverless API endpoints

### Deployment
- **Vercel** - Recommended hosting platform

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hemang0710/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import project to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build

3. **Configure environment variables** (if needed)
   - Add any required environment variables in Vercel dashboard

4. **Deploy**
   - Click "Deploy" and your site will be live in minutes

### Alternative Deployment Options

- **Netlify**: Similar to Vercel, supports Next.js out of the box
- **AWS Amplify**: For AWS-based deployments
- **Docker**: Build a containerized version for any platform

## 📝 Customization

### Update Personal Information

1. **Contact Information**
   - Edit `components/Footer.tsx` for social links
   - Update email in `app/contact/ContactContent.tsx`
   - Modify location in various pages

2. **Projects**
   - Edit project data in `app/projects/ProjectsContent.tsx`
   - Update GitHub and demo URLs
   - Modify metrics and descriptions

3. **Resume**
   - Edit `app/resume/ResumeContent.tsx` with your actual resume content
   - Create a PDF version and link it in the download button

4. **About Me**
   - Update timeline in `app/about/AboutContent.tsx`
   - Modify tech stack categories
   - Edit professional summary

### Styling

- **Colors**: Edit `tailwind.config.ts` to change the accent color
- **Fonts**: Modify font imports in `app/layout.tsx`
- **Components**: All components are in the `components/` directory

## 🎨 Design Principles

- **Clean & Minimal**: No flashy animations, professional appearance
- **Neutral Colors**: White/gray/black with blue accent
- **Strong Typography**: Clear hierarchy and readable fonts
- **Recruiter-Friendly**: Easy to navigate, clear information architecture
- **Data-Driven**: Showcases technical skills through visualizations

## 📊 Performance

- **Lighthouse Score**: Optimized for >90 score
- **SEO**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant
- **Mobile Performance**: Optimized for all screen sizes

## 🔧 Development

### Project Structure

```
Portfolio/
├── app/
│   ├── about/
│   ├── contact/
│   ├── data-ml/
│   ├── projects/
│   ├── resume/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProjectCard.tsx
│   └── ThemeProvider.tsx
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📧 Contact

For questions or feedback, please reach out through the contact form on the website.

---

**Built with ❤️ for the Canadian tech community**
