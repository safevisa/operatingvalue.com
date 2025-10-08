import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  const { t } = useTranslation('common');
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // 简单的视口检测
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          controls.start('visible');
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
  }, [controls]);

  // 粒子动画组件
  const ParticleField = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-30"
            initial={{
              x: Math.random() * 1200,
              y: 800 + 10,
            }}
            animate={{
              y: -10,
              x: Math.random() * 1200,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    );
  };

  // 3D浮动球体
  const FloatingSpheres = () => {
    const spheres = [
      { size: 'w-32 h-32', delay: 0, duration: 8 },
      { size: 'w-20 h-20', delay: 2, duration: 6 },
      { size: 'w-16 h-16', delay: 4, duration: 10 },
    ];

    return (
      <div className="absolute inset-0 overflow-hidden">
        {spheres.map((sphere, index) => (
          <motion.div
            key={index}
            className={`absolute ${sphere.size} bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-xl`}
            initial={{
              x: Math.random() * 400 + 100,
              y: Math.random() * 300 + 100,
            }}
            animate={{
              x: Math.random() * 400 + 100,
              y: Math.random() * 300 + 100,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: sphere.duration,
              delay: sphere.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        {isMounted && <ParticleField />}
        <FloatingSpheres />
        
        {/* 六边形网络背景 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-primary-300 rotate-45 transform"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border border-primary-300 rotate-45 transform"></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-primary-300 rotate-45 transform"></div>
          <div className="absolute bottom-1/4 right-1/4 w-14 h-14 border border-primary-300 rotate-45 transform"></div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-white">{t('hero.title')}</span>
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-200 mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t('hero.subtitle')}
          </motion.h2>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/products';
              }
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 shadow-glow"
          >
            <span>{t('hero.cta')}</span>
            <ArrowRight size={20} />
          </motion.button>

          <motion.button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/contact';
              }
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-white border-2 border-white/30 px-8 py-4 rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300"
          >
            <Play size={20} />
            <span className="text-lg">
              {t('hero.learnMore')}
            </span>
          </motion.button>
        </motion.div>

        {/* 滚动指示器 */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm mb-2">
              {t('hero.cta')}
            </span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 装饰性几何图形 */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary-400/30 rotate-45 transform animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary-400/30 rotate-45 transform animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 border border-primary-400/30 rotate-45 transform animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroBanner;
