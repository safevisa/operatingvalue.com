import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import SimpleHeroBanner from '@/components/SimpleHeroBanner';
import MissionSection from '@/components/MissionSection';
import ProductsSection from '@/components/ProductsSection';
import SolutionsSection from '@/components/SolutionsSection';
import InvestmentSection from '@/components/InvestmentSection';
import ContactSection from '@/components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="CODPAL - 全球私域电商支付与履约解决方案"
      description="CODPAL为全球电商企业提供智能化的支付、物流与品牌营销一体化解决方案，助力企业实现全球化增长"
      keywords="CODPAL, 跨境电商, 支付解决方案, 物流履约, 品牌营销, 全球化, 电商平台, 跨境贸易"
    >
      <SimpleHeroBanner />
      <MissionSection />
      <ProductsSection />
      <SolutionsSection />
      <InvestmentSection />
      <ContactSection />
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

export default HomePage;
