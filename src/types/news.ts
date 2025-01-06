export interface NewsPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: 'AI' | 'Blockchain' | 'Community' | 'Events';
  timestamp: string;
  likes: number;
  comments: number;
  image?: string;
}