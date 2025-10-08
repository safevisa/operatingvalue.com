import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Target,
  Zap
} from 'lucide-react';

const InvestmentSection: React.FC = () => {
  const { t } = useTranslation('common');
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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

  const investmentModels = [
    {
      id: 0,
      title: t('investment.model1.title') || '战略投资',
      description: t('investment.model1.desc') || '深度战略合作，共同开拓市场',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
      features: [
        t('investment.model1.feature1') || '股权投资机会',
        t('investment.model1.feature2') || '董事会席位',
        t('investment.model1.feature3') || '战略资源共享',
        t('investment.model1.feature4') || '长期合作保障'
      ],
      returns: '15-25%'
    },
    {
      id: 1,
      title: t('investment.model2.title') || '合作伙伴',
      description: t('investment.model2.desc') || '业务合作，互利共赢',
      icon: Users,
      color: 'from-green-500 to-green-600',
      features: [
        t('investment.model2.feature1') || '代理分销权',
        t('investment.model2.feature2') || '技术支持',
        t('investment.model2.feature3') || '营销支持',
        t('investment.model2.feature4') || '培训体系'
      ],
      returns: '10-20%'
    },
    {
      id: 2,
      title: t('investment.model3.title') || '技术合作',
      description: t('investment.model3.desc') || '技术整合，创新驱动',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
      features: [
        t('investment.model3.feature1') || '技术授权',
        t('investment.model3.feature2') || '联合研发',
        t('investment.model3.feature3') || '专利共享',
        t('investment.model3.feature4') || '技术咨询'
      ],
      returns: '8-15%'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: t('investment.benefits.revenue') || '稳定收益',
      description: t('investment.benefits.revenue.desc') || '多元化收益模式，降低投资风险'
    },
    {
      icon: TrendingUp,
      title: t('investment.benefits.growth') || '快速增长',
      description: t('investment.benefits.growth.desc') || '享受行业高速增长红利'
    },
    {
      icon: Shield,
      title: t('investment.benefits.security') || '风险控制',
      description: t('investment.benefits.security.desc') || '完善的风控体系，保障投资安全'
    },
    {
      icon: Globe,
      title: t('investment.benefits.global') || '全球布局',
      description: t('investment.benefits.global.desc') || '覆盖全球主要市场，分散地域风险'
    }
  ];

  const process = [
    {
      step: '01',
      title: t('investment.process.step1') || '初步洽谈',
      description: t('investment.process.step1.desc') || '了解合作意向，评估匹配度'
    },
    {
      step: '02',
      title: t('investment.process.step2') || '尽职调查',
      description: t('investment.process.step2.desc') || '全面评估企业资质和财务状况'
    },
    {
      step: '03',
      title: t('investment.process.step3') || '协议签署',
      description: t('investment.process.step3.desc') || '确定合作条款，签署正式协议'
    },
    {
      step: '04',
      title: t('investment.process.step4') || '启动合作',
      description: t('investment.process.step4.desc') || '正式启动合作，开始业务运营'
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full blur-3xl opacity-20"></div>
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
            {t('investment.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t('investment.subtitle')}
          </p>
        </motion.div>

        {/* 合作模式 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('investment.models') || '合作模式'}
            </h3>
            <p className="text-xl text-gray-600">
              {t('investment.models.desc') || '多种合作模式，满足不同投资需求'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {investmentModels.map((model, index) => (
              <motion.button
                key={model.id}
                onClick={() => setActiveTab(model.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === model.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-floating'
                }`}
              >
                <model.icon size={24} />
                <span className="font-semibold">{model.title}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  activeTab === model.id 
                    ? 'bg-white/20' 
                    : 'bg-primary-100 text-primary-600'
                }`}>
                  {model.returns}
                </span>
              </motion.button>
            ))}
          </div>

          {/* 模式详情 */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <div className={`w-20 h-20 bg-gradient-to-br ${investmentModels[activeTab].color} rounded-2xl flex items-center justify-center mb-6`}>
                {React.createElement(investmentModels[activeTab].icon, { size: 40, className: "text-white" })}
              </div>
              
              <h4 className="text-3xl font-bold text-gray-900 mb-4">
                {investmentModels[activeTab].title}
              </h4>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {investmentModels[activeTab].description}
              </p>

              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">合作内容</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {investmentModels[activeTab].features.map((feature, index) => (
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
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-floating">
              <h5 className="text-xl font-bold text-gray-900 mb-6">预期收益</h5>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">年化收益率</span>
                  <span className="text-3xl font-bold gradient-text">
                    {investmentModels[activeTab].returns}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`h-3 bg-gradient-to-r ${investmentModels[activeTab].color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${parseInt(investmentModels[activeTab].returns)}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star size={20} className="text-yellow-500" />
                  <span className="text-gray-700">风险等级：中等</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp size={20} className="text-green-500" />
                  <span className="text-gray-700">投资期限：3-5年</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign size={20} className="text-blue-500" />
                  <span className="text-gray-700">最小投资：100万人民币</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 btn-primary flex items-center justify-center space-x-2"
              >
                <span>{t('investment.apply')}</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* 投资优势 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('investment.benefits.title') || '投资优势'}
            </h3>
            <p className="text-xl text-gray-600">
              {t('investment.benefits.subtitle') || '为什么选择CODPAL'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-floating hover:shadow-glow-lg transition-all duration-300 border border-gray-100 h-full text-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <benefit.icon size={32} className="text-white" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 合作流程 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('investment.process.title') || '合作流程'}
            </h3>
            <p className="text-xl text-gray-600">
              {t('investment.process.subtitle') || '简单四步，开启合作之旅'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-floating text-center relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
                
                {/* 连接线 */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-primary-500 transform -translate-y-1/2 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;
