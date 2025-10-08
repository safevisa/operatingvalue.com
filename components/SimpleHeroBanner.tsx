import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';

const SimpleHeroBanner: React.FC = () => {
  const { t } = useTranslation('common');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLearnMore = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/products';
    }
  };

  const handleContact = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        {/* 简单的背景装饰 */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-full blur-3xl"></div>
        
        {/* 六边形网络背景 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-primary-300 rotate-45 transform"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border border-primary-300 rotate-45 transform"></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-primary-300 rotate-45 transform"></div>
          <div className="absolute bottom-1/4 right-1/4 w-14 h-14 border border-primary-300 rotate-45 transform"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">CODPAL</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            全球私域电商支付与履约解决方案
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          为全球电商企业提供智能化的支付、物流与品牌营销一体化解决方案，助力企业实现全球化增长
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={handleLearnMore}
            className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 shadow-glow hover:scale-105 transition-transform duration-300"
          >
            <span>了解更多</span>
            <ArrowRight size={20} />
          </button>

          <button
            onClick={handleContact}
            className="flex items-center space-x-2 text-white border-2 border-white/30 px-8 py-4 rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <Play size={20} />
            <span className="text-lg">立即合作</span>
          </button>
        </div>

        {/* 滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2">了解更多</span>
            <ChevronDown size={24} />
          </div>
        </div>
      </div>

      {/* 装饰性几何图形 */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary-400/30 rotate-45 transform animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary-400/30 rotate-45 transform animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 border border-primary-400/30 rotate-45 transform animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default SimpleHeroBanner;
