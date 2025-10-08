import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Target, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Globe,
  Users,
  Award,
  Download
} from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const { t } = useTranslation('common');
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);

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

  const solutions = [
    {
      id: 0,
      title: t('solutions.crossborder.title'),
      description: t('solutions.crossborder.description'),
      icon: ShoppingCart,
      color: 'from-blue-500 to-blue-600',
      features: [
        t('solutions.crossborder.feature1') || '全球支付解决方案',
        t('solutions.crossborder.feature2') || '多币种结算',
        t('solutions.crossborder.feature3') || '合规税务服务',
        t('solutions.crossborder.feature4') || '实时汇率转换'
      ],
      benefits: [
        t('solutions.crossborder.benefit1') || '降低交易成本30%',
        t('solutions.crossborder.benefit2') || '提升支付成功率至99.5%',
        t('solutions.crossborder.benefit3') || '覆盖200+国家和地区'
      ]
    },
    {
      id: 1,
      title: t('solutions.branding.title'),
      description: t('solutions.branding.description'),
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      features: [
        t('solutions.branding.feature1') || '品牌定位策略',
        t('solutions.branding.feature2') || '全球营销推广',
        t('solutions.branding.feature3') || '社交媒体管理',
        t('solutions.branding.feature4') || 'KOL合作网络'
      ],
      benefits: [
        t('solutions.branding.benefit1') || '提升品牌知名度40%',
        t('solutions.branding.benefit2') || '增加用户粘性',
        t('solutions.branding.benefit3') || '建立全球品牌影响力'
      ]
    },
    {
      id: 2,
      title: t('solutions.digital.title'),
      description: t('solutions.digital.description'),
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
      features: [
        t('solutions.digital.feature1') || '精准用户画像',
        t('solutions.digital.feature2') || '多渠道数据整合',
        t('solutions.digital.feature3') || 'AI营销自动化',
        t('solutions.digital.feature4') || '实时效果监控'
      ],
      benefits: [
        t('solutions.digital.benefit1') || '提升转化率50%',
        t('solutions.digital.benefit2') || '降低获客成本',
        t('solutions.digital.benefit3') || '优化营销ROI'
      ]
    }
  ];

  const marketStats = [
    { icon: TrendingUp, value: '85%', label: t('market.stats.growth') || '市场增长率' },
    { icon: Globe, value: '200+', label: t('market.stats.countries') || '覆盖国家' },
    { icon: Users, value: '10M+', label: t('market.stats.users') || '服务用户' },
    { icon: Award, value: '99.9%', label: t('market.stats.satisfaction') || '客户满意度' }
  ];

  const partners = [
    { name: 'Amazon', logo: '/logos/amazon.png' },
    { name: 'Shopify', logo: '/logos/shopify.png' },
    { name: 'PayPal', logo: '/logos/paypal.png' },
    { name: 'Stripe', logo: '/logos/stripe.png' },
    { name: 'Alibaba', logo: '/logos/alibaba.png' },
    { name: 'Tencent', logo: '/logos/tencent.png' }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full blur-3xl opacity-30"></div>
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
            {t('solutions.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </motion.div>

        {/* 解决方案选择器 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutions.map((solution, index) => (
              <motion.button
                key={solution.id}
                onClick={() => setActiveSolution(solution.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeSolution === solution.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <solution.icon size={24} />
                <span className="font-semibold">{solution.title}</span>
              </motion.button>
            ))}
          </div>

          {/* 解决方案详情 */}
          <motion.div
            key={activeSolution}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className={`w-20 h-20 bg-gradient-to-br ${solutions[activeSolution].color} rounded-2xl flex items-center justify-center mb-6`}>
                {React.createElement(solutions[activeSolution].icon, { size: 40, className: "text-white" })}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {solutions[activeSolution].title}
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {solutions[activeSolution].description}
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">核心功能</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solutions[activeSolution].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('/api/download-whitepaper', '_blank');
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <Download size={20} />
                <span>下载解决方案白皮书</span>
              </motion.button>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-floating">
              <h4 className="text-xl font-bold text-gray-900 mb-6">解决方案效果</h4>
              <div className="space-y-6">
                {solutions[activeSolution].benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${solutions[activeSolution].color} rounded-lg flex items-center justify-center`}>
                      <TrendingUp size={24} className="text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 市场数据 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('market.title')}
            </h3>
            <p className="text-xl text-gray-600">
              {t('market.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100 hover:border-primary-200 transition-all duration-300">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <stat.icon size={32} className="text-white" />
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 合作伙伴 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('market.partners') || '合作伙伴'}
            </h3>
            <p className="text-gray-600">
              {t('market.partners.desc') || '与全球领先企业携手，共创电商未来'}
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-floating hover:shadow-glow transition-all duration-300"
              >
                <div className="text-2xl font-bold text-gray-400">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
