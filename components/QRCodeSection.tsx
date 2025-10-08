import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone } from 'lucide-react';

const QRCodeSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100"
    >
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
          <QrCode size={32} className="text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 mb-2">
            关注公众号
          </h4>
          <p className="text-gray-600 text-sm mb-3">
            扫码关注CODPAL官方公众号，获取最新资讯
          </p>
          <div className="flex items-center space-x-2 text-primary-600">
            <Smartphone size={16} />
            <span className="text-sm font-medium">微信扫描二维码</span>
          </div>
        </div>
      </div>
      
      {/* 二维码占位符 */}
      <div className="mt-4 flex justify-center">
        <div className="w-32 h-32 bg-white rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
          <QrCode size={48} className="text-gray-400 mb-2" />
          <span className="text-xs text-gray-500 text-center">
            二维码<br />占位符
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default QRCodeSection;
