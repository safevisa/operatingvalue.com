import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, ready } = useTranslation('common');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'products', href: '/products' },
    { key: 'solutions', href: '/solutions' },
    { key: 'market', href: '/market' },
    { key: 'investment', href: '/investment' },
    { key: 'news', href: '/news' },
    { key: 'contact', href: '/contact' },
  ];

  const toggleLanguage = () => {
    const newLocale = router.locale === 'zh' ? 'en' : 'zh';
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 翻译fallback
  const getTranslation = (key: string, fallback: string) => {
    if (!ready) return fallback;
    const translation = t(key);
    return translation === key ? fallback : translation;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl">C</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold gradient-text">
              CODPAL
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`text-sm font-medium transition-colors duration-200 ${
                  router.pathname === item.href
                    ? 'text-primary-500'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary-500'
                    : 'text-white hover:text-primary-300'
                }`}
              >
                {getTranslation(`navigation.${item.key}`, 
                  item.key === 'home' ? '首页' :
                  item.key === 'about' ? '关于我们' :
                  item.key === 'products' ? '产品与技术' :
                  item.key === 'solutions' ? '解决方案' :
                  item.key === 'market' ? '市场与合作' :
                  item.key === 'investment' ? '投资与加盟' :
                  item.key === 'news' ? '新闻与活动' :
                  item.key === 'contact' ? '联系我们' : item.key
                )}
              </motion.a>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Globe size={16} />
              <span className="text-sm font-medium">
                {router.locale === 'zh' ? 'EN' : '中文'}
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.href = '/contact';
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm"
            >
              {getTranslation('hero.learnMore', '立即合作')}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className={`block text-base font-medium transition-colors duration-200 ${
                    router.pathname === item.href
                      ? 'text-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(`navigation.${item.key}`, 
                    item.key === 'home' ? '首页' :
                    item.key === 'about' ? '关于我们' :
                    item.key === 'products' ? '产品与技术' :
                    item.key === 'solutions' ? '解决方案' :
                    item.key === 'market' ? '市场与合作' :
                    item.key === 'investment' ? '投资与加盟' :
                    item.key === 'news' ? '新闻与活动' :
                    item.key === 'contact' ? '联系我们' : item.key
                  )}
                </motion.a>
              ))}
              
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
                >
                  <Globe size={16} />
                  <span className="text-sm font-medium">
                    {router.locale === 'zh' ? 'EN' : '中文'}
                  </span>
                </button>
                
                <button 
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = '/contact';
                    }
                  }}
                  className="btn-primary text-sm"
                >
                  {getTranslation('hero.learnMore', '立即合作')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
