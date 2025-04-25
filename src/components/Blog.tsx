import { Clock, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Auto Repair Tips & Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest automotive maintenance tips and insights from our experienced technicians.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-6">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href={`#blog-${post.id}`} 
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition"
                >
                  Read More 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;