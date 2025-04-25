export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Spot Tire Wear and When to Replace Your Tires",
    excerpt: "Learn the warning signs of tire wear and how to determine when it's time to replace your tires for optimal safety and performance.",
    author: "Mike Johnson",
    date: "May 15, 2025",
    image: "https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
  },
  {
    id: 2,
    title: "5 Maintenance Tips to Keep Your Car Running Longer",
    excerpt: "Discover simple maintenance practices that can significantly extend the life of your vehicle and save you money on repairs.",
    author: "Sarah Martinez",
    date: "May 8, 2025",
    image: "https://images.pexels.com/photos/3807327/pexels-photo-3807327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
  }
];