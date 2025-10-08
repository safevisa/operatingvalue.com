import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import SolutionsSection from '@/components/SolutionsSection';

const SolutionsPage: React.FC = () => {
  return (
    <Layout
      title="解决方案 - CODPAL"
      description="CODPAL为不同行业提供定制化解决方案"
    >
      <SolutionsSection />
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

export default SolutionsPage;
