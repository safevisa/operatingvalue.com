import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Database, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Layers,
  Cpu
} from 'lucide-react';

const ProductsSection: React.FC = () => {
  const { t } = useTranslation('common');
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeLayer, setActiveLayer] = useState(0);

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

  const architecture = [
    {
      id: 0,
      title: t('products.architecture.top'),
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      features: [
        t('products.features.ai') || 'AI智能决策',
        t('products.features.brand') || '品牌策略',
        t('products.features.automation') || '营销自动化'
      ],
      description: t('products.top.description') || '基于AI技术的智能品牌系统，提供全方位的品牌策略和营销自动化解决方案',
      link: '/products/brand-system'
    },
    {
      id: 1,
      title: t('products.architecture.middle'),
      icon: Network,
      color: 'from-blue-500 to-blue-600',
      features: [
        t('products.features.analytics') || '数据分析',
        t('products.features.campaigns') || '营销活动',
        t('products.features.optimization') || '效果优化'
      ],
      description: t('products.middle.description') || '强大的数字营销中台，整合多渠道数据，提供精准的营销决策支持',
      link: '/products/marketing-platform'
    },
    {
      id: 2,
      title: t('products.architecture.bottom'),
      icon: Database,
      color: 'from-green-500 to-green-600',
      features: [
        t('products.features.payment') || '支付系统',
        t('products.features.logistics') || '物流网络',
        t('products.features.compliance') || '合规服务'
      ],
      description: t('products.bottom.description') || '全球化的基础设施服务，确保支付安全和物流高效',
      link: '/products/global-infrastructure'
    }
  ];

  const techHighlights = [
    {
      icon: Zap,
      title: t('products.highlights.performance') || '高性能',
      description: t('products.highlights.performance.desc') || '毫秒级响应，支持高并发处理'
    },
    {
      icon: Shield,
      title: t('products.highlights.security') || '安全保障',
      description: t('products.highlights.security.desc') || '银行级安全标准，数据加密传输'
    },
    {
      icon: Globe,
      title: t('products.highlights.global') || '全球化',
      description: t('products.highlights.global.desc') || '覆盖全球主要市场，本地化服务'
    },
    {
      icon: Cpu,
      title: t('products.highlights.ai') || 'AI驱动',
      description: t('products.highlights.ai.desc') || '机器学习算法，智能决策支持'
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full blur-3xl opacity-30"></div>
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
            {t('products.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* 3D架构图 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* 3D金字塔结构 */}
            <div className="relative h-96 flex flex-col justify-center items-center">
              {architecture.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => {
                    setActiveLayer(layer.id);
                    if (typeof window !== 'undefined') {
                      window.location.href = layer.link;
                    }
                  }}
                  className={`absolute cursor-pointer transition-all duration-300 ${
                    activeLayer === layer.id ? 'z-10' : 'z-0'
                  }`}
                  style={{
                    top: `${index * 80}px`,
                    transform: `perspective(1000px) rotateX(${index * 15}deg) translateZ(${index * 20}px)`,
                  }}
                >
                  <div className={`w-80 h-20 bg-gradient-to-r ${layer.color} rounded-2xl shadow-floating hover:shadow-glow-lg transition-all duration-300 flex items-center justify-between px-6 ${
                    activeLayer === layer.id ? 'ring-4 ring-primary-300' : ''
                  }`}>
                    <div className="flex items-center space-x-4">
                      <layer.icon size={32} className="text-white" />
                      <div>
                        <h3 className="text-white font-bold text-lg">
                          {layer.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {layer.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 功能特性展示 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-16"
            >
              <div className="bg-white rounded-2xl p-8 shadow-floating border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Layers size={24} className="text-primary-500 mr-2" />
                  {architecture[activeLayer].title} - 核心功能
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {architecture[activeLayer].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 技术亮点 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('products.highlights.title') || '技术亮点'}
            </h3>
            <p className="text-xl text-gray-600">
              {t('products.highlights.subtitle') || '领先的技术实力，为您提供最佳体验'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-floating hover:shadow-glow-lg transition-all duration-300 border border-gray-100 h-full text-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <highlight.icon size={32} className="text-white" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
