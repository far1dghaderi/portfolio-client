import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">John Doe</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/blogs"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/blogs') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {t('nav.blogs')}
            </Link>
            <Link
              to="/cv"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/cv') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {t('nav.cv')}
            </Link>
            <Link
              to="/donations"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/donations') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {t('nav.donations')}
            </Link>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher />
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <span className="text-sm text-gray-700">
                  {t('nav.welcome')}, {user?.name}
                </span>
                <button
                  onClick={logout}
                  className="btn-secondary text-sm"
                >
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="btn-primary text-sm"
              >
                {t('nav.login')}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
