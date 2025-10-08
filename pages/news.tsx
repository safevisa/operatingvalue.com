import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { Calendar, Clock, ArrowRight, TrendingUp, Award, Globe } from 'lucide-react';

const NewsPage: React.FC = () => {
  const { t } = useTranslation('common');

  const news = [
    {
      id: 1,
      title: 'CODPAL获得A轮融资5000万美元',
      date: '2024-01-15',
      category: '融资动态',
      summary: 'CODPAL宣布完成A轮融资，本轮融资由知名投资机构领投，将用于技术研发和市场扩张。',
      image: '/news/funding.jpg'
    },
    {
      id: 2,
      title: 'CODPAL与亚马逊达成战略合作',
      date: '2024-01-10',
      category: '合作动态',
      summary: 'CODPAL与亚马逊正式签署战略合作协议，双方将在跨境电商领域展开深度合作。',
      image: '/news/amazon.jpg'
    },
    {
      id: 3,
      title: 'CODPAL入选"2024年最佳金融科技企业"',
      date: '2024-01-05',
      category: '企业荣誉',
      summary: 'CODPAL凭借在支付科技领域的创新表现，荣获"2024年最佳金融科技企业"称号。',
      image: '/news/award.jpg'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'CODPAL全球合作伙伴大会',
      date: '2024-03-15',
      location: '深圳',
      type: '线下活动',
      description: '汇聚全球合作伙伴，分享最新技术成果和合作机遇'
    },
    {
      id: 2,
      title: '跨境电商支付技术峰会',
      date: '2024-02-28',
      location: '线上',
      type: '线上会议',
      description: '探讨跨境电商支付技术发展趋势和解决方案'
    },
    {
      id: 3,
      title: 'CODPAL产品发布会',
      date: '2024-02-20',
      location: '上海',
      type: '产品发布',
      description: '发布最新一代支付与履约解决方案'
    }
  ];

  return (
    <Layout
      title="新闻与活动 - CODPAL"
      description="了解CODPAL最新动态和行业活动"
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
              新闻与活动
            </h1>
            <p className="text-xl md:text-2xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
              关注CODPAL最新动态，参与行业盛会
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              最新动态
            </h2>
            <p className="text-xl text-gray-600">
              了解CODPAL的最新发展和行业动态
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-floating hover:shadow-glow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp size={32} className="text-white" />
                    </div>
                    <div className="text-primary-600 font-semibold">{item.category}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.summary}
                  </p>
                  
                  <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200">
                    <span>阅读更多</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              活动预告
            </h2>
            <p className="text-xl text-gray-600">
              参与CODPAL举办的各类行业活动
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-floating hover:shadow-glow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-primary-600">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.type === '线下活动' 
                      ? 'bg-green-100 text-green-700'
                      : event.type === '线上会议'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <Globe size={16} />
                  <span>{event.location}</span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                
                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <span>立即报名</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              媒体报道
            </h2>
            <p className="text-xl text-gray-600">
              主流媒体对CODPAL的关注和报道
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: '36氪', logo: '36kr' },
              { name: '创业邦', logo: 'cyzone' },
              { name: '钛媒体', logo: 'tmt' },
              { name: '亿欧网', logo: 'iyiou' }
            ].map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-floating hover:shadow-glow transition-all duration-300 text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900">
                  {media.name}
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

export default NewsPage;
