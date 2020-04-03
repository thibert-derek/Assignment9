export interface Content {
  id: number;
  author: string;
  imageUrl?: string;
  type?: string;
  title: string;
  body: string;
  tags: string[];
}
