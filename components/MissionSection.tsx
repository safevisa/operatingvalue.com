import React from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Target, Users, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

const MissionSection: React.FC = () => {
  const { t } = useTranslation('common');
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

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

  const advantages = [
    {
      icon: Zap,
      title: t('advantages.tech.title'),
      description: t('advantages.tech.description'),
      color: 'from-blue-500 to-blue-600',
      delay: 0.1,
    },
    {
      icon: Target,
      title: t('advantages.brand.title'),
      description: t('advantages.brand.description'),
      color: 'from-purple-500 to-purple-600',
      delay: 0.2,
    },
    {
      icon: TrendingUp,
      title: t('advantages.data.title'),
      description: t('advantages.data.description'),
      color: 'from-green-500 to-green-600',
      delay: 0.3,
    },
  ];

  const stats = [
    { number: '100+', label: t('stats.companies') || '合作企业' },
    { number: '50+', label: t('stats.countries') || '覆盖国家' },
    { number: '99.9%', label: t('stats.uptime') || '系统可用性' },
    { number: '24/7', label: t('stats.support') || '技术支持' },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 品牌使命 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6"
          >
            {t('mission.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            {t('mission.subtitle')}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed"
          >
            {t('mission.description')}
          </motion.p>
        </motion.div>

        {/* 核心优势 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('advantages.title')}
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('advantages.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: advantage.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-floating hover:shadow-glow-lg transition-all duration-300 border border-gray-100 h-full">
                  {/* 图标 */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <advantage.icon size={32} className="text-white" />
                  </motion.div>

                  {/* 内容 */}
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* 装饰性边框 */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 数据统计 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
