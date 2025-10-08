import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { 
  Brain, 
  Target, 
  Zap, 
  BarChart3, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  Download,
  Star,
  TrendingUp
} from 'lucide-react';

const BrandSystemPage: React.FC = () => {
  const { t } = useTranslation('common');

  const features = [
    {
      icon: Brain,
      title: 'AI智能决策',
      description: '基于深度学习的智能决策引擎，为企业提供精准的商业洞察和决策建议',
      benefits: ['实时数据分析', '智能推荐算法', '预测性分析', '自动化决策流程']
    },
    {
      icon: Target,
      title: '品牌策略',
      description: '全方位的品牌定位和营销策略制定，助力企业建立强大的品牌影响力',
      benefits: ['品牌定位分析', '竞品对比研究', '目标用户画像', '品牌价值评估']
    },
    {
      icon: Zap,
      title: '营销自动化',
      description: '智能化的营销流程自动化，提升营销效率，降低人工成本',
      benefits: ['自动化邮件营销', '社交媒体管理', '内容自动生成', '营销效果跟踪']
    }
  ];

  const capabilities = [
    {
      title: '智能分析引擎',
      description: '基于大数据和AI技术的智能分析系统，实时处理海量数据，提供精准洞察',
      metrics: ['99.9%', '准确率', '毫秒级', '响应速度', '1000+', '数据源']
    },
    {
      title: '品牌管理系统',
      description: '全生命周期品牌管理平台，从品牌定位到营销执行的全流程管理',
      metrics: ['50+', '品牌案例', '95%', '客户满意度', '24/7', '技术支持']
    },
    {
      title: '营销自动化平台',
      description: '智能营销自动化工具，实现营销活动的全流程自动化执行',
      metrics: ['300%', '效率提升', '60%', '成本降低', '85%', '转化率提升']
    }
  ];

  const useCases = [
    {
      industry: '跨境电商',
      scenario: '品牌出海',
      challenge: '如何在海外市场建立品牌认知度',
      solution: '通过AI分析目标市场，制定本地化品牌策略，自动化执行营销活动',
      result: '品牌知名度提升40%，销售转化率提升60%'
    },
    {
      industry: '零售电商',
      scenario: '用户运营',
      challenge: '如何提升用户粘性和复购率',
      solution: '智能用户画像分析，个性化营销推送，自动化客户服务',
      result: '用户留存率提升35%，复购率提升50%'
    },
    {
      industry: 'B2B企业',
      scenario: '客户获取',
      challenge: '如何高效获取潜在客户',
      solution: '智能线索挖掘，自动化跟进流程，精准营销投放',
      result: '获客成本降低45%，转化率提升80%'
    }
  ];

  return (
    <Layout
      title="智能品牌系统 - CODPAL"
      description="CODPAL智能品牌系统，基于AI技术的全方位品牌管理和营销自动化解决方案"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain size={40} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              智能品牌系统
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              基于AI技术的全方位品牌管理和营销自动化解决方案
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              核心功能
            </h2>
            <p className="text-xl text-gray-600">
              三大核心能力，赋能品牌智能化运营
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-floating hover:shadow-glow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">核心优势</h4>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              技术能力
            </h2>
            <p className="text-xl text-gray-600">
              强大的技术实力，确保系统稳定高效运行
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-floating hover:shadow-glow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {capability.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {capability.description}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {capability.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {metric}
                      </div>
                      <div className="text-sm text-gray-600">
                        {capability.metrics[metricIndex + 1] || ''}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              应用场景
            </h2>
            <p className="text-xl text-gray-600">
              多行业成功案例，验证解决方案的有效性
            </p>
          </motion.div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-floating"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                        {useCase.industry}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                        {useCase.scenario}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      挑战
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {useCase.challenge}
                    </p>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      解决方案
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {useCase.solution}
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <TrendingUp className="text-green-500 mr-2" />
                      实施效果
                    </h4>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                      <p className="text-gray-700 font-medium">
                        {useCase.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              开启智能品牌之旅
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              立即体验CODPAL智能品牌系统，让AI为您的品牌赋能
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/contact';
                  }
                }}
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
              >
                <span>立即咨询</span>
                <ArrowRight size={20} />
              </button>
              
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('/api/download-whitepaper', '_blank');
                  }
                }}
                className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200"
              >
                <Download size={20} />
                <span>下载产品手册</span>
              </button>
            </div>
          </motion.div>
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

export default BrandSystemPage;
