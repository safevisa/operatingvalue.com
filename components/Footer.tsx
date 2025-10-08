import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const footerLinks = {
    company: [
      { key: 'about', href: '/about' },
      { key: 'products', href: '/products' },
      { key: 'solutions', href: '/solutions' },
      { key: 'contact', href: '/contact' },
    ],
    services: [
      { key: 'market', href: '/market' },
      { key: 'investment', href: '/investment' },
      { key: 'news', href: '/news' },
    ],
    legal: [
      { key: 'privacy', href: '/privacy' },
      { key: 'terms', href: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'pyf@codpal.org' },
    { icon: Phone, text: '+86 13128878995' },
    { icon: MapPin, text: '深圳市南山区侨城坊T7栋1301' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold">CODPAL</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {router.locale === 'zh' 
                ? '全球领先的私域电商支付与履约解决方案提供商，致力于为全球电商企业提供智能化、一体化的商业解决方案。'
                : 'Leading global private domain e-commerce payment and fulfillment solution provider, committed to delivering intelligent and integrated business solutions for global e-commerce enterprises.'
              }
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <item.icon size={16} className="text-primary-400" />
                  <span className="text-sm text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">
              {router.locale === 'zh' ? '公司信息' : 'Company'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.key}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {t(`navigation.${link.key}`)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">
              {router.locale === 'zh' ? '服务' : 'Services'}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.key}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {t(`navigation.${link.key}`)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">
              {router.locale === 'zh' ? '法律条款' : 'Legal'}
            </h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map((link) => (
                <li key={link.key}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {t(`footer.${link.key}`)}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">
                {router.locale === 'zh' ? '关注我们' : 'Follow Us'}
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-400 text-sm">
            {t('footer.rights')}
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Globe size={14} />
              <span>{router.locale === 'zh' ? '中文' : 'English'}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
