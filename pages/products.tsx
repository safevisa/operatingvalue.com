import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import ProductsSection from '@/components/ProductsSection';

const ProductsPage: React.FC = () => {
  return (
    <Layout
      title="产品与技术 - CODPAL"
      description="了解CODPAL的核心产品和技术实力"
    >
      <ProductsSection />
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

export default ProductsPage;
