import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { Users, Target, Award, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation('common');

  const milestones = [
    {
      year: '2020',
      title: '公司成立',
      description: 'CODPAL正式成立，专注于跨境电商解决方案'
    },
    {
      year: '2021',
      title: '产品上线',
      description: '核心支付和物流产品正式上线服务'
    },
    {
      year: '2022',
      title: '市场扩张',
      description: '业务覆盖全球50+国家和地区'
    },
    {
      year: '2023',
      title: '技术升级',
      description: 'AI技术深度集成，智能化水平显著提升'
    },
    {
      year: '2024',
      title: '生态建设',
      description: '构建完整的全球电商生态服务体系'
    }
  ];

  const team = [
    {
      name: 'CEO & 创始人',
      position: 'CEO & 创始人',
      description: '15年电商行业经验，曾任阿里巴巴高级技术专家'
    },
    {
      name: 'CTO',
      position: 'CTO',
      description: '前腾讯技术总监，专注AI和大数据技术'
    },
    {
      name: 'CMO',
      position: 'CMO',
      description: '10年品牌营销经验，曾任职于知名跨国企业'
    },
    {
      name: 'CFO',
      position: 'CFO',
      description: '资深财务专家，前德勤合伙人'
    }
  ];

  return (
    <Layout
      title="关于我们 - CODPAL"
      description="了解CODPAL的发展历程、团队实力和企业愿景"
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
              关于 CODPAL
            </h1>
            <p className="text-xl md:text-2xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
              我们致力于为全球电商企业提供最先进的支付与履约解决方案
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                我们的故事
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                CODPAL成立于2020年，是一家专注于全球私域电商支付与履约解决方案的创新科技公司。
                我们深知跨境电商企业在全球化进程中面临的挑战，因此致力于通过技术创新，
                为企业提供一站式、智能化的解决方案。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                从最初的支付解决方案到现在的全链路服务体系，CODPAL始终坚持以客户为中心，
                以技术为驱动，为全球电商企业创造更大的商业价值。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-gray-600">合作企业</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-600">覆盖国家</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">10M+</div>
                  <div className="text-gray-600">服务用户</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
                  <div className="text-gray-600">系统可用性</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              发展历程
            </h2>
            <p className="text-xl text-gray-600">
              从创立到成长，见证CODPAL的每一个重要时刻
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 px-8">
                    <div className={`bg-white rounded-2xl p-6 shadow-floating ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <div className="text-2xl font-bold text-primary-500 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-primary-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              核心团队
            </h2>
            <p className="text-xl text-gray-600">
              经验丰富的专业团队，为您提供最优质的服务
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-floating hover:shadow-glow-lg transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-primary-500 font-semibold mb-3">
                  {member.position}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              企业价值观
            </h2>
            <p className="text-xl text-gray-600">
              我们的价值观指引着每一个决策和行动
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-floating text-center"
            >
              <Target className="w-16 h-16 text-primary-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">客户至上</h3>
              <p className="text-gray-600">
                始终以客户需求为导向，提供超越期待的产品和服务体验
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-floating text-center"
            >
              <Award className="w-16 h-16 text-primary-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">追求卓越</h3>
              <p className="text-gray-600">
                持续创新，追求技术和服务的最优品质
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-floating text-center"
            >
              <Globe className="w-16 h-16 text-primary-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">全球视野</h3>
              <p className="text-gray-600">
                立足全球市场，为世界各地企业创造价值
              </p>
            </motion.div>
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

export default AboutPage;
