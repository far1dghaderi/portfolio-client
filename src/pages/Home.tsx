import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { mockBlogPosts, userInfo } from '../data/mockData';
import type { ContactForm } from '../types';

const Home = () => {
  const { t } = useTranslation();
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const latestBlogs = mockBlogPosts.slice(0, 3);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log('Contact form submitted:', contactForm);
    alert(t('home.contact.successMessage'));
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('home.hero.greeting')} {userInfo.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('home.hero.title')}
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-100">
              {t('home.hero.bio')}
            </p>
            <Link
              to="/cv"
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              {t('home.hero.cvButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.latestBlogs.title')}</h2>
            <p className="text-lg text-gray-600">{t('home.latestBlogs.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestBlogs.map((post) => (
              <article key={post.id} className="card">
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <div className="mb-4">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="btn-primary inline-block"
                >
                  {t('home.latestBlogs.readMore')}
                </Link>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/blogs"
              className="btn-secondary inline-block"
            >
              {t('home.latestBlogs.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.contact.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('home.contact.subtitle')}
            </p>
          </div>
          
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('home.contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder={t('home.contact.namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('home.contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder={t('home.contact.emailPlaceholder')}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t('home.contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="input-field"
                placeholder={t('home.contact.messagePlaceholder')}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary px-8 py-3"
              >
                {t('home.contact.sendButton')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
