import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import QRCodeSection from './QRCodeSection';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Globe,
  MessageCircle,
  Users,
  Building
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t } = useTranslation('common');
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email.title') || '邮箱联系',
      value: 'pyf@codpal.org',
      description: t('contact.email.desc') || '24小时内回复',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: t('contact.phone.title') || '电话咨询',
      value: '+86 13128878995',
      description: t('contact.phone.desc') || '工作日 9:00-18:00',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: t('contact.address.title') || '公司地址',
      value: '深圳市南山区侨城坊T7栋1301',
      description: t('contact.address.desc') || '欢迎预约实地考察',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: t('contact.hours.title') || '工作时间',
      value: '周一至周五 9:00-18:00',
      description: t('contact.hours.desc') || '节假日除外',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: t('contact.types.general') || '一般咨询' },
    { value: 'partnership', label: t('contact.types.partnership') || '合作洽谈' },
    { value: 'investment', label: t('contact.types.investment') || '投资咨询' },
    { value: 'support', label: t('contact.types.support') || '技术支持' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟提交过程
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        type: 'general'
      });
      
      // 3秒后重置提交状态
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              {t('contact.info.title') || '联系信息'}
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl hover:shadow-floating transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-700 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 社交媒体 */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {t('contact.social.title') || '关注我们'}
              </h4>
              <p className="text-gray-600 mb-4">
                {t('contact.social.desc') || '获取最新动态和行业资讯'}
              </p>
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'YouTube', 'WeChat'].map((social, index) => (
                  <motion.button
                    key={social}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <Globe size={18} className="text-gray-600" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* 公众号二维码 */}
            <QRCodeSection />
          </motion.div>

          {/* 联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-floating">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.form.title') || '在线留言'}
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('contact.form.success') || '提交成功！'}
                  </h4>
                  <p className="text-gray-600">
                    {t('contact.form.success.desc') || '我们会尽快与您联系'}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder={t('contact.form.name.placeholder') || '请输入您的姓名'}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder={t('contact.form.email.placeholder') || '请输入您的邮箱'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder={t('contact.form.company.placeholder') || '请输入您的公司名称'}
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.type') || '咨询类型'}
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder={t('contact.form.message.placeholder') || '请详细描述您的需求...'}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading"></div>
                        <span>{t('contact.form.submitting') || '提交中...'}</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>{t('contact.form.submit')}</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
