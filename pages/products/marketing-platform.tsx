import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { 
  Network, 
  BarChart3, 
  Target, 
  Users,
  ArrowRight,
  CheckCircle,
  Download,
  TrendingUp,
  Globe,
  Zap,
  Settings,
  PieChart
} from 'lucide-react';

const MarketingPlatformPage: React.FC = () => {
  const { t } = useTranslation('common');

  const features = [
    {
      icon: BarChart3,
      title: '数据分析',
      description: '全方位数据采集与分析，深度洞察用户行为和市场趋势',
      benefits: ['实时数据监控', '多维度分析', '可视化报表', '预测性分析']
    },
    {
      icon: Target,
      title: '营销活动',
      description: '智能化营销活动管理，从策划到执行的全流程自动化',
      benefits: ['活动模板库', '自动化执行', 'A/B测试', '效果优化']
    },
    {
      icon: TrendingUp,
      title: '效果优化',
      description: '基于AI算法的智能优化，持续提升营销效果和ROI',
      benefits: ['智能调优', '实时优化', 'ROI最大化', '成本控制']
    }
  ];

  const modules = [
    {
      title: '数据中台',
      description: '统一的数据管理平台，整合多渠道数据，提供统一的数据视图',
      capabilities: ['数据采集', '数据清洗', '数据建模', '数据服务'],
      metrics: ['100+', '数据源', '99.9%', '数据准确率', '实时', '数据处理']
    },
    {
      title: '营销自动化',
      description: '智能营销自动化引擎，实现营销活动的全流程自动化执行',
      capabilities: ['智能触达', '个性化推荐', '自动化流程', '效果跟踪'],
      metrics: ['500%', '效率提升', '85%', '转化率', '24/7', '自动化运行']
    },
    {
      title: '客户洞察',
      description: '深度客户分析平台，构建360度客户画像，精准识别客户价值',
      capabilities: ['用户画像', '行为分析', '价值评估', '生命周期管理'],
      metrics: ['95%', '准确率', '300%', '客户价值提升', '50%', '获客成本降低']
    }
  ];

  const workflows = [
    {
      step: '01',
      title: '数据采集',
      description: '多渠道数据实时采集，包括网站、APP、社交媒体等',
      icon: Network
    },
    {
      step: '02',
      title: '数据处理',
      description: '数据清洗、建模和分析，生成可执行的洞察',
      icon: Settings
    },
    {
      step: '03',
      title: '策略制定',
      description: '基于数据分析结果，制定个性化营销策略',
      icon: Target
    },
    {
      step: '04',
      title: '自动化执行',
      description: '智能执行营销活动，实时监控和优化效果',
      icon: Zap
    }
  ];

  const successStories = [
    {
      company: '某跨境电商',
      industry: '电商零售',
      challenge: '营销成本高，转化率低',
      solution: '部署营销中台，实现数据驱动营销',
      results: [
        { metric: '营销成本', improvement: '降低40%' },
        { metric: '转化率', improvement: '提升60%' },
        { metric: '客户满意度', improvement: '提升35%' }
      ]
    },
    {
      company: '某B2B企业',
      industry: '企业服务',
      challenge: '客户获取困难，销售周期长',
      solution: '构建客户洞察系统，精准识别高价值客户',
      results: [
        { metric: '获客成本', improvement: '降低50%' },
        { metric: '销售周期', improvement: '缩短30%' },
        { metric: '成交率', improvement: '提升45%' }
      ]
    }
  ];

  return (
    <Layout
      title="数字营销中台 - CODPAL"
      description="CODPAL数字营销中台，基于大数据的智能化营销管理和效果优化解决方案"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Network size={40} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              数字营销中台
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              基于大数据的智能化营销管理和效果优化解决方案
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
              三大核心能力，构建智能营销生态
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
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

      {/* Modules Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              产品模块
            </h2>
            <p className="text-xl text-gray-600">
              三大核心模块，构建完整的营销中台体系
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-floating hover:shadow-glow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {module.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {module.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">核心能力</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {module.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {module.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-xl font-bold text-blue-600 mb-1">
                        {metric}
                      </div>
                      <div className="text-xs text-gray-600">
                        {module.metrics[metricIndex + 1] || ''}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              工作流程
            </h2>
            <p className="text-xl text-gray-600">
              四步流程，实现数据驱动的智能营销
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflows.map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-floating text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <workflow.icon size={32} className="text-white" />
                  </div>
                  
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">{workflow.step}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {workflow.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {workflow.description}
                  </p>
                </div>
                
                {/* 连接线 */}
                {index < workflows.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 transform -translate-y-1/2 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              成功案例
            </h2>
            <p className="text-xl text-gray-600">
              真实客户案例，验证解决方案效果
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-floating"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                    {story.industry}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">面临挑战</h4>
                  <p className="text-gray-600">{story.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">解决方案</h4>
                  <p className="text-gray-600">{story.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">实施效果</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {story.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex justify-between items-center bg-green-50 rounded-lg p-3">
                        <span className="text-gray-700 font-medium">{result.metric}</span>
                        <span className="text-green-600 font-bold">{result.improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              开启数据驱动营销
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              立即部署CODPAL数字营销中台，让数据为您的营销赋能
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
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
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

export default MarketingPlatformPage;
