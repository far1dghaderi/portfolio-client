import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBlogPosts } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import type { Comment } from '../types';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { user, isAuthenticated } = useAuth();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const post = mockBlogPosts.find(p => p.id === id);

  useEffect(() => {
    // Load comments from localStorage (mock data)
    const savedComments = localStorage.getItem(`comments-${id}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [id]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !user) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      blogId: id!,
      userId: user.id,
      userName: user.name,
      content: comment.trim(),
      date: new Date().toISOString().split('T')[0],
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
    setComment('');
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="btn-primary">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blogs */}
        <div className="mb-8">
          <Link to="/blogs" className="text-blue-600 hover:text-blue-800 transition-colors">
            ← Back to Blogs
          </Link>
        </div>

        {/* Blog Post Content */}
        <article className="bg-white rounded-lg shadow-md p-8 mb-8">
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
            />
          )}
          
          <header className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">{post.date}</span>
              <span className="text-sm text-gray-500">By {post.author}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{post.description}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {post.content}
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments</h2>
          
          {/* Comment Form */}
          {isAuthenticated ? (
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <div className="mb-4">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                  Add a comment
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  className="input-field"
                  placeholder="Share your thoughts..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary">
                Post Comment
              </button>
            </form>
          ) : (
            <div className="mb-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">
                Please <Link to="/auth" className="underline font-medium">log in</Link> to leave a comment.
              </p>
            </div>
          )}

          {/* Comments List */}
          <div className="space-y-6">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{comment.userName}</span>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
