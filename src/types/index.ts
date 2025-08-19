export interface User {
  id: string;
  email: string;
  name: string;
  isAuthenticated: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  imageUrl?: string;
}

export interface Comment {
  id: string;
  blogId: string;
  userId: string;
  userName: string;
  content: string;
  date: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface AuthForm {
  email: string;
  password: string;
  name?: string;
}
