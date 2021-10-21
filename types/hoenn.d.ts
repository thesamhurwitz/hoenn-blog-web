export enum UserRole {
  ADMIN = 'ADMIN',
  WRITER = 'WRITER',
  USER = 'USER',
}

export enum WriterType {
  PERSONAL = 'PERSONAL',
  ORGANIZATION = 'ORGANIZATION'
}

export type Writer = {
  id: number;
  name: string;
  displayName: string;
  type: WriterType,
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
  writer: Writer;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
}
