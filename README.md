# Tomorrow's Tech

A modern, responsive web application showcasing digital services including web development, mobile applications, digital marketing, and custom websites.

## 🚀 Features

- **Modern Design**: Built with Next.js 16 and React 19
- **Responsive UI**: Tailwind CSS v4 for beautiful, mobile-first design
- **Smooth Animations**: Framer Motion for engaging user interactions
- **SEO Optimized**: Built-in metadata and SEO best practices
- **Analytics Ready**: Vercel Analytics integration
- **Contact Form**: Functional contact form with validation
- **Portfolio Showcase**: Dynamic portfolio with category filtering
- **Service Pages**: Dedicated pages for each service offering

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.5
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **TypeScript**: For type safety

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tomorrows-tech
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
tomorrows-tech/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── portfolio/           # Portfolio page
│   ├── privacy/             # Privacy policy
│   ├── services/            # Service pages
│   ├── terms/               # Terms of service
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── forms/              # Form components
│   ├── layout/             # Layout components (Navbar, Footer)
│   └── sections/           # Page sections
├── lib/                     # Utility functions and constants
├── public/                  # Static assets
│   ├── clients/            # Client logos
│   ├── portfolio/          # Portfolio images
│   ├── testimonials/       # Testimonial images
│   └── favicon/            # Favicon files
└── types/                   # TypeScript type definitions
```

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

### Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Contact Information

Edit `/lib/constants.ts` to update:
- Email address
- Phone number
- Business address
- Social media links

### Modify Services

Update the `SERVICES` array in `/lib/constants.ts` to add, remove, or modify services.

### Change Brand Colors

Edit your Tailwind configuration to customize the color scheme.

## 📧 Contact Form

The contact form currently logs submissions to the console. To integrate with an email service:

1. Choose a service (SendGrid, Resend, Nodemailer, etc.)
2. Add your API key to environment variables
3. Update `/app/api/contact/route.ts` with your email integration

## 📄 License

All rights reserved - Tomorrow's Tech

## 🤝 Contributing

This is a private project. For inquiries, please contact us through our website.

---

Built with ❤️ by Tomorrow's Tech
