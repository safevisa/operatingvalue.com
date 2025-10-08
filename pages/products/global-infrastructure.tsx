import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { 
  Globe, 
  Shield, 
  Truck,
  ArrowRight,
  CheckCircle,
  Download,
  Zap,
  Users,
  Building,
  MapPin,
  CreditCard,
  Package
} from 'lucide-react';

const GlobalInfrastructurePage: React.FC = () => {
  const { t } = useTranslation('common');

  const services = [
    {
      icon: CreditCard,
      title: '支付系统',
      description: '全球多币种支付解决方案，支持200+种支付方式，覆盖180+国家和地区',
      features: ['多币种支持', '实时汇率', '风险控制', '合规认证'],
      coverage: '180+',
      coverageDesc: '国家和地区',
      processingTime: '< 3秒',
      processingDesc: '支付处理时间'
    },
    {
      icon: Truck,
      title: '物流网络',
      description: '全球物流网络覆盖，提供从仓储到配送的全链路物流服务',
      features: ['全球仓储', '智能配送', '实时追踪', '退换货服务'],
      coverage: '200+',
      coverageDesc: '城市覆盖',
      processingTime: '24-72小时',
      processingDesc: '全球配送'
    },
    {
      icon: Shield,
      title: '合规服务',
      description: '全球化合规解决方案，确保企业在不同市场的合规运营',
      features: ['税务合规', '法律咨询', '数据保护', '行业认证'],
      coverage: '50+',
      coverageDesc: '合规认证',
      processingTime: '7-30天',
      processingDesc: '认证周期'
    }
  ];

  const capabilities = [
    {
      title: '支付能力',
      description: '强大的全球支付处理能力',
      metrics: [
        { label: '支持币种', value: '200+', color: 'text-green-600' },
        { label: '支付成功率', value: '99.9%', color: 'text-blue-600' },
        { label: '处理速度', value: '< 3秒', color: 'text-purple-600' }
      ]
    },
    {
      title: '物流能力',
      description: '全球物流网络覆盖能力',
      metrics: [
        { label: '覆盖国家', value: '180+', color: 'text-green-600' },
        { label: '仓储中心', value: '500+', color: 'text-blue-600' },
        { label: '配送时效', value: '24-72h', color: 'text-purple-600' }
      ]
    },
    {
      title: '合规能力',
      description: '全球化合规保障能力',
      metrics: [
        { label: '合规认证', value: '50+', color: 'text-green-600' },
        { label: '法律支持', value: '100+', color: 'text-blue-600' },
        { label: '数据安全', value: '99.99%', color: 'text-purple-600' }
      ]
    }
  ];

  const globalReach = [
    {
      region: '亚太地区',
      countries: ['中国', '日本', '韩国', '新加坡', '澳大利亚', '印度'],
      services: ['支付', '物流', '合规'],
      status: '全面覆盖'
    },
    {
      region: '欧洲地区',
      countries: ['英国', '德国', '法国', '意大利', '西班牙', '荷兰'],
      services: ['支付', '物流', '合规'],
      status: '全面覆盖'
    },
    {
      region: '北美地区',
      countries: ['美国', '加拿大', '墨西哥'],
      services: ['支付', '物流', '合规'],
      status: '全面覆盖'
    },
    {
      region: '其他地区',
      countries: ['巴西', '俄罗斯', '南非', '阿联酋'],
      services: ['支付', '物流'],
      status: '部分覆盖'
    }
  ];

  const implementationProcess = [
    {
      phase: 'Phase 1',
      title: '需求分析',
      description: '深入了解企业业务需求，制定全球化战略方案',
      duration: '1-2周',
      deliverables: ['需求调研报告', '实施方案', '时间计划']
    },
    {
      phase: 'Phase 2',
      title: '系统对接',
      description: '完成支付、物流、合规系统的技术对接和测试',
      duration: '2-4周',
      deliverables: ['API对接', '系统测试', '安全认证']
    },
    {
      phase: 'Phase 3',
      title: '试运营',
      description: '在选定市场进行小规模试运营，验证系统稳定性',
      duration: '2-3周',
      deliverables: ['试运营报告', '问题修复', '性能优化']
    },
    {
      phase: 'Phase 4',
      title: '正式上线',
      description: '全量部署，提供7x24小时技术支持服务',
      duration: '持续',
      deliverables: ['正式上线', '运营监控', '持续优化']
    }
  ];

  return (
    <Layout
      title="全球出海基础设施 - CODPAL"
      description="CODPAL全球出海基础设施，提供支付、物流、合规一体化的全球化服务解决方案"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe size={40} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              全球出海基础设施
            </h1>
            <p className="text-xl md:text-2xl text-green-200 max-w-3xl mx-auto leading-relaxed">
              支付、物流、合规一体化的全球化服务解决方案
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              核心服务
            </h2>
            <p className="text-xl text-gray-600">
              三大核心服务，构建完整的全球化基础设施
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-floating hover:shadow-glow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">核心特性</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {service.coverage}
                    </div>
                    <div className="text-sm text-gray-600">
                      {service.coverageDesc}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {service.processingTime}
                    </div>
                    <div className="text-sm text-gray-600">
                      {service.processingDesc}
                    </div>
                  </div>
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
              服务能力
            </h2>
            <p className="text-xl text-gray-600">
              强大的全球化服务能力，确保业务稳定运行
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

                <div className="space-y-4">
                  {capability.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{metric.label}</span>
                      <span className={`font-bold text-lg ${metric.color}`}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              全球覆盖
            </h2>
            <p className="text-xl text-gray-600">
              覆盖全球主要市场，为您的全球化业务提供全方位支持
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalReach.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-floating"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{region.region}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    region.status === '全面覆盖' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {region.status}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">覆盖国家</h4>
                  <div className="flex flex-wrap gap-1">
                    {region.countries.slice(0, 4).map((country, countryIndex) => (
                      <span key={countryIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {country}
                      </span>
                    ))}
                    {region.countries.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{region.countries.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">服务内容</h4>
                  <div className="flex space-x-1">
                    {region.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              实施流程
            </h2>
            <p className="text-xl text-gray-600">
              四步实施流程，确保项目顺利上线
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-floating relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">{phase.phase}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {phase.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {phase.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-green-600">
                      周期: {phase.duration}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">交付成果</h4>
                    <div className="space-y-1">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* 连接线 */}
                {index < implementationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-300 to-green-500 transform -translate-y-1/2 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              开启全球化征程
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              立即部署CODPAL全球出海基础设施，让您的业务走向世界
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
                className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
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

export default GlobalInfrastructurePage;
