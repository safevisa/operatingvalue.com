import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { TrendingUp, Globe, Users, Award, BarChart3, Target, CheckCircle, Building } from 'lucide-react';

const MarketPage: React.FC = () => {
  const { t } = useTranslation('common');

  const marketData = [
    {
      title: '全球电商市场',
      value: '$6.3万亿',
      growth: '+15.2%',
      description: '2024年全球电商市场规模'
    },
    {
      title: '跨境贸易增长',
      value: '+23.5%',
      growth: 'YoY',
      description: '跨境电商年度增长率'
    },
    {
      title: '数字化支付',
      value: '89%',
      growth: '+12%',
      description: '全球数字化支付普及率'
    }
  ];

  const partners = [
    { name: 'Amazon', type: '电商平台', region: '全球' },
    { name: 'Shopify', type: '建站平台', region: '全球' },
    { name: 'PayPal', type: '支付服务', region: '全球' },
    { name: 'Stripe', type: '支付处理', region: '全球' },
    { name: 'Alibaba', type: 'B2B平台', region: '亚太' },
    { name: 'Tencent', type: '科技公司', region: '中国' }
  ];

  const cooperationModels = [
    {
      title: 'B2B合作',
      description: '企业级解决方案合作',
      features: ['技术集成', '定制开发', '长期支持'],
      icon: Building
    },
    {
      title: 'B2C服务',
      description: '面向消费者的服务平台',
      features: ['用户体验优化', '多渠道支持', '数据分析'],
      icon: Users
    },
    {
      title: '联合创新',
      description: '共同研发新技术',
      features: ['技术共享', '专利合作', '市场拓展'],
      icon: Target
    }
  ];

  return (
    <Layout
      title="市场与合作 - CODPAL"
      description="了解全球电商市场机遇和CODPAL的合作伙伴"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              市场与合作
            </h1>
            <p className="text-xl md:text-2xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
              探索全球电商市场机遇，携手合作伙伴共创未来
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Data */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              市场机遇
            </h2>
            <p className="text-xl text-gray-600">
              全球电商市场持续增长，为合作伙伴提供巨大机遇
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 text-center shadow-floating hover:shadow-glow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {data.value}
                </div>
                <div className="text-primary-600 font-semibold mb-2">
                  {data.growth}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {data.title}
                </h3>
                <p className="text-gray-600">
                  {data.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              合作伙伴
            </h2>
            <p className="text-xl text-gray-600">
              与全球领先企业携手，共创电商生态
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-floating hover:shadow-glow transition-all duration-300 text-center"
              >
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  {partner.name}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  {partner.type}
                </div>
                <div className="text-xs text-primary-600">
                  {partner.region}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              合作模式
            </h2>
            <p className="text-xl text-gray-600">
              多种合作方式，满足不同需求
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cooperationModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-floating hover:shadow-glow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <model.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {model.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {model.description}
                </p>

                <div className="space-y-3">
                  {model.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'zh', ['common'])),
    },
  };
};

export default MarketPage;
