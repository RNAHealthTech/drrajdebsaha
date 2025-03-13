import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogTemplate: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center">Blog post not found</h1>
        <div className="text-center mt-8">
          <Link to="/blogs" className="text-blue-600 hover:text-blue-800">
            Return to all blogs
          </Link>
        </div>
      </div>
    );
  }

  // Function to convert markdown to HTML (simple implementation)
  const markdownToHtml = (markdown: string) => {
    // This is a very basic implementation
    // In a real app, you'd use a library like marked or remark
    let html = markdown
      // Headers
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Lists
      .replace(/^\- (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
      // Paragraphs
      .replace(/^(?!<[hl]).+$/gm, (match) => {
        if (match.trim() === '') return '';
        return `<p class="my-4">${match}</p>`;
      });

    // Convert consecutive list items to a list
    html = html.replace(/<li class="ml-6 list-disc">(.*?)<\/li>\n<li class="ml-6 list-disc">/g, 
      '<ul class="list-disc pl-5 my-4"><li class="ml-6 list-disc">$1</li>\n<li class="ml-6 list-disc">');
    html = html.replace(/<li class="ml-6 list-disc">(.*?)<\/li>\n(?!<li)/g, 
      '<li class="ml-6 list-disc">$1</li></ul>\n');

    return html;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="h-64 bg-gray-200 relative mt-20">
            <img 
              src={blog.imageUrl} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {/* Article content */}
          <article className="lg:w-2/3 bg-white rounded-lg shadow-md p-8">
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(blog.content) }}
            />
            
            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
          </div>
          </div>
  );
};

export default BlogTemplate;