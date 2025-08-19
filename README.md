# Personal Blog Website

A modern, responsive personal blog website built with React, TypeScript, and TailwindCSS. This project showcases a full-featured blog with authentication, comments, and a professional CV page.

## Features

### 🏠 Home Page
- Hero section with personal introduction
- Latest blog posts preview
- Contact form for visitors
- Call-to-action button to view CV

### 📝 Blog System
- **Blogs Page**: Grid layout with search and filtering by tags
- **Individual Blog Posts**: Full article view with comments system
- **Rich Content**: Support for markdown-style content with code blocks
- **Tags & Categories**: Organize posts with tags
- **Search Functionality**: Find posts by title or description

### 👤 Authentication
- **Login/Signup**: User registration and authentication
- **Protected Features**: Comments require authentication
- **Session Management**: Persistent login state
- **Demo Mode**: Works with any email/password combination

### 💬 Comments System
- **Authenticated Comments**: Only logged-in users can comment
- **Real-time Updates**: Comments appear immediately
- **Local Storage**: Comments persist across sessions (demo)

### 📄 CV/Resume Page
- **Professional Layout**: Clean, structured presentation
- **Skills Section**: Visual skill tags
- **Experience Timeline**: Chronological work history
- **Education**: Academic background
- **Contact Information**: Easy access to contact details

### 💰 Donations Page
- **Multiple Payment Options**: Stripe, PayPal, Cryptocurrency
- **Custom Amounts**: Predefined or custom donation amounts
- **Support Information**: Explains how donations help
- **Alternative Support**: Other ways to support the creator

### 🎨 Design & UX
- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean, minimal design with TailwindCSS
- **Smooth Navigation**: React Router for seamless page transitions
- **Loading States**: Proper feedback for user actions
- **Error Handling**: User-friendly error messages

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **State Management**: React Context API
- **Authentication**: Custom implementation with localStorage

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── context/            # React Context providers
│   └── AuthContext.tsx # Authentication state management
├── data/               # Mock data and content
│   └── mockData.ts     # Blog posts and user information
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Blogs.tsx       # Blog listing page
│   ├── BlogPost.tsx    # Individual blog post page
│   ├── CV.tsx          # CV/Resume page
│   ├── Auth.tsx        # Authentication page
│   └── Donations.tsx   # Donations page
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── App.tsx             # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles and TailwindCSS
```

## Customization

### Adding New Blog Posts
Edit `src/data/mockData.ts` to add new blog posts:

```typescript
{
  id: 'unique-id',
  title: 'Your Blog Post Title',
  description: 'Brief description of the post',
  content: `Your markdown content here...`,
  date: '2024-01-20',
  author: 'Your Name',
  tags: ['React', 'TypeScript'],
  imageUrl: 'https://example.com/image.jpg' // Optional
}
```

### Updating Personal Information
Modify the `userInfo` object in `src/data/mockData.ts` to update:
- Personal details
- Skills
- Work experience
- Education
- Contact information

### Styling Customization
- Edit `src/index.css` for global styles
- Modify `tailwind.config.js` for theme customization
- Update component-specific styles in individual files

## Authentication

The authentication system is currently implemented as a demo with localStorage. In a production environment, you would want to:

1. Implement a backend API
2. Use secure authentication (JWT, OAuth, etc.)
3. Add proper password hashing
4. Implement session management
5. Add email verification

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Upload the `dist` folder to S3

## Future Enhancements

- [ ] Backend API integration
- [ ] Database for blog posts and comments
- [ ] Admin panel for content management
- [ ] Image upload functionality
- [ ] SEO optimization
- [ ] Dark mode toggle
- [ ] Newsletter subscription
- [ ] Social media sharing
- [ ] Analytics integration
- [ ] Real payment processing for donations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you find this project helpful, consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 💰 Making a donation (if implemented)

---

Built with ❤️ using React, TypeScript, and TailwindCSS
