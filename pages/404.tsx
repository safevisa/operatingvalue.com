import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';

const Custom404: React.FC = () => {
  const router = useRouter();

  return (
    <Layout
      title="页面未找到 - CODPAL"
      description="抱歉，您访问的页面不存在"
    >
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-primary-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-accent-200/30 to-accent-400/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* 404 数字 */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-9xl md:text-[12rem] font-bold gradient-text mb-8"
            >
              404
            </motion.div>

            {/* 错误信息 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                页面未找到
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                抱歉，您访问的页面可能已被移动、删除或暂时不可用。
                请检查URL是否正确，或返回首页继续浏览。
              </p>
            </motion.div>

            {/* 操作按钮 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                onClick={() => router.push('/')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <Home size={20} />
                <span>返回首页</span>
              </motion.button>

              <motion.button
                onClick={() => router.back()}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
              >
                <ArrowLeft size={20} />
                <span>返回上页</span>
              </motion.button>
            </motion.div>

            {/* 装饰性元素 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex justify-center space-x-8"
            >
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="w-4 h-4 bg-primary-400 rounded-full opacity-60"
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
