import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'CODPAL - 全球私域电商支付与履约解决方案',
  description = 'CODPAL为全球电商企业提供智能化的支付、物流与品牌营销一体化解决方案，助力企业实现全球化增长',
  keywords = 'CODPAL, 跨境电商, 支付解决方案, 物流履约, 品牌营销, 全球化'
}) => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CODPAL" />
        <meta name="language" content={locale === 'zh' ? 'zh-CN' : 'en'} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={locale === 'zh' ? 'zh_CN' : 'en_US'} />
        <meta property="og:site_name" content="CODPAL" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
