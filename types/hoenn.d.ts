export enum UserRole {
  ADMIN = 'ADMIN',
  WRITER = 'WRITER',
  USER = 'USER',
}

export enum BlogType {
  PERSONAL = 'PERSONAL',
  ORGANIZATION = 'ORGANIZATION'
}

export type Blog = {
  id: number;
  name: string;
  displayName: string;
  type: BlogType,
  createdAt: string;
  updatedAt: string;
}

export type Category = {
  slug: string;
  name: string;
}

export type Profile = {
  bio: string;
}

export type User = {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
  profile?: Profile;
}

export type Post = {
  id: number;
  title: string;
  published: boolean;
  content?: string;
  blog: Blog;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
}
