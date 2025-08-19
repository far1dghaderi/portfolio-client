import type { BlogPost } from '../types';

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    description: 'Learn how to set up a modern React application with TypeScript and best practices for type safety.',
    content: `
# Getting Started with React and TypeScript

React and TypeScript are a powerful combination for building modern web applications. TypeScript adds static typing to JavaScript, making your code more reliable and easier to maintain.

## Why TypeScript?

TypeScript provides several benefits:
- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Improved Documentation**: Types serve as documentation
- **Easier Refactoring**: Confidence when changing code

## Setting Up Your Project

1. Create a new React project with TypeScript:
\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

2. Install additional dependencies:
\`\`\`bash
npm install @types/react @types/react-dom
\`\`\`

## Basic TypeScript with React

Here's a simple example of a typed React component:

\`\`\`tsx
interface Props {
  name: string;
  age: number;
  isActive?: boolean;
}

const UserCard: React.FC<Props> = ({ name, age, isActive = false }) => {
  return (
    <div className={\`user-card \${isActive ? 'active' : ''}\`}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};
\`\`\`

## Best Practices

1. **Use interfaces for props**: Define clear interfaces for your component props
2. **Leverage generics**: Use generics for reusable components
3. **Type your state**: Always type your useState hooks
4. **Use strict mode**: Enable strict TypeScript configuration

## Conclusion

TypeScript with React provides a robust foundation for building scalable applications. Start with simple types and gradually add more complex typing as your project grows.

Remember, the goal is to make your code more maintainable and catch errors early in the development process.
    `,
    date: '2024-01-15',
    author: 'John Doe',
    tags: ['React', 'TypeScript', 'Web Development'],
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Mastering TailwindCSS for Modern Web Design',
    description: 'Explore advanced TailwindCSS techniques and learn how to create beautiful, responsive designs efficiently.',
    content: `
# Mastering TailwindCSS for Modern Web Design

TailwindCSS has revolutionized the way we approach CSS. Instead of writing custom CSS, we use utility classes to build designs directly in our HTML.

## Why TailwindCSS?

- **Rapid Development**: Build interfaces quickly with utility classes
- **Consistent Design**: Predefined design system ensures consistency
- **Responsive by Default**: Built-in responsive utilities
- **Small Bundle Size**: PurgeCSS removes unused styles

## Getting Started

1. Install TailwindCSS:
\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

2. Configure your content paths:
\`\`\`js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## Advanced Techniques

### Custom Components

Create reusable component classes:

\`\`\`css
@layer components {
  .btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200;
  }
}
\`\`\`

### Responsive Design

TailwindCSS makes responsive design simple:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
\`\`\`

### Dark Mode

Enable dark mode with ease:

\`\`\`html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  <h1 class="text-2xl font-bold">Hello World</h1>
</div>
\`\`\`

## Best Practices

1. **Use semantic class names**: Group related utilities together
2. **Leverage @apply**: Create custom components for repeated patterns
3. **Keep it simple**: Don't over-engineer with too many custom utilities
4. **Use responsive prefixes**: Design mobile-first

## Conclusion

TailwindCSS empowers developers to create beautiful, responsive designs quickly. Its utility-first approach might seem verbose at first, but the productivity gains are significant.

Start with the basics and gradually explore advanced features as you become more comfortable with the framework.
    `,
    date: '2024-01-10',
    author: 'John Doe',
    tags: ['CSS', 'TailwindCSS', 'Design'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Building Scalable State Management with React',
    description: 'Learn about different state management patterns in React and when to use each approach.',
    content: `
# Building Scalable State Management with React

State management is crucial for building complex React applications. Understanding when and how to manage state effectively can make or break your application's architecture.

## Types of State

### Local State
State that belongs to a single component:

\`\`\`tsx
const [count, setCount] = useState(0);
const [isLoading, setIsLoading] = useState(false);
\`\`\`

### Global State
State that needs to be shared across multiple components:

\`\`\`tsx
// Using Context API
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
\`\`\`

## State Management Solutions

### 1. Context API
Perfect for simple global state:

\`\`\`tsx
// Create context
const ThemeContext = createContext();

// Provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
\`\`\`

### 2. Redux Toolkit
For complex state management:

\`\`\`tsx
// Slice
const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, loading: false },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
\`\`\`

### 3. Zustand
Lightweight alternative to Redux:

\`\`\`tsx
const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
\`\`\`

## Best Practices

1. **Keep state minimal**: Only store what you need
2. **Use appropriate tools**: Don't over-engineer with complex state management for simple apps
3. **Normalize data**: Structure your state efficiently
4. **Avoid prop drilling**: Use context or state management libraries when needed

## When to Use What

- **Local state**: Component-specific data
- **Context API**: Simple global state (theme, user, etc.)
- **Redux Toolkit**: Complex applications with lots of state updates
- **Zustand**: Lightweight global state management

## Conclusion

Choose your state management solution based on your application's complexity. Start simple and scale up as needed. The key is to keep your state predictable and manageable.
    `,
    date: '2024-01-05',
    author: 'John Doe',
    tags: ['React', 'State Management', 'JavaScript'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'The Future of Web Development: What to Expect in 2024',
    description: 'Explore the latest trends and technologies that will shape web development in the coming year.',
    content: `
# The Future of Web Development: What to Expect in 2024

Web development is constantly evolving, with new technologies and frameworks emerging regularly. Let's explore what's on the horizon for 2024.

## Emerging Technologies

### 1. Web Components
Native browser components are gaining traction:

\`\`\`html
<template id="user-card">
  <style>
    .user-card {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 8px;
    }
  </style>
  <div class="user-card">
    <h2><slot name="name"></slot></h2>
    <p><slot name="email"></slot></p>
  </div>
</template>

<script>
class UserCard extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById('user-card');
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('user-card', UserCard);
</script>
\`\`\`

### 2. WebAssembly (WASM)
Performance-critical applications:

\`\`\`rust
// Rust code compiled to WASM
#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    if n <= 1 {
        return n;
    }
    fibonacci(n - 1) + fibonacci(n - 2)
}
\`\`\`

### 3. Progressive Web Apps (PWAs)
Enhanced mobile experiences:

\`\`\`javascript
// Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/styles/main.css',
        '/scripts/main.js',
      ]);
    })
  );
});
\`\`\`

## Framework Trends

### 1. React 18+ Features
- Concurrent rendering
- Automatic batching
- Suspense for data fetching

### 2. Vue 3 Composition API
- Better TypeScript support
- Improved performance
- More flexible component logic

### 3. SvelteKit
- Zero JavaScript by default
- Built-in SSR/SSG
- Excellent developer experience

## Performance Focus

### 1. Core Web Vitals
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

### 2. Bundle Optimization
- Tree shaking
- Code splitting
- Dynamic imports

### 3. Image Optimization
- WebP format
- Responsive images
- Lazy loading

## AI and Machine Learning

### 1. AI-Powered Development Tools
- GitHub Copilot
- Tabnine
- Code completion and generation

### 2. AI in User Experience
- Personalized content
- Smart recommendations
- Automated testing

## Sustainability

### 1. Green Web Development
- Optimize for energy efficiency
- Reduce carbon footprint
- Sustainable hosting

### 2. Accessibility
- WCAG 2.1 compliance
- Inclusive design
- Screen reader support

## Conclusion

The future of web development is exciting and challenging. Stay updated with the latest trends, but remember that fundamentals matter most. Focus on building fast, accessible, and maintainable applications.

The key is to choose the right tools for your specific use case and always prioritize user experience.
    `,
    date: '2024-01-01',
    author: 'John Doe',
    tags: ['Web Development', 'Trends', 'Technology'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop'
  }
];

export const userInfo = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  email: 'john.doe@example.com',
  location: 'San Francisco, CA',
  bio: 'Passionate full-stack developer with 5+ years of experience building modern web applications. I love working with React, TypeScript, and Node.js. When I\'m not coding, you can find me hiking, reading tech blogs, or contributing to open source projects.',
  skills: [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 
    'MongoDB', 'AWS', 'Docker', 'Git', 'REST APIs', 'GraphQL'
  ],
  experience: [
    {
      company: 'TechCorp',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      description: 'Led development of multiple web applications using React and Node.js. Mentored junior developers and implemented best practices.'
    },
    {
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      description: 'Built and maintained customer-facing applications. Worked with React, TypeScript, and various cloud services.'
    },
    {
      company: 'DigitalAgency',
      position: 'Frontend Developer',
      duration: '2019 - 2020',
      description: 'Developed responsive websites and web applications for various clients using modern JavaScript frameworks.'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      year: '2019'
    }
  ]
};
