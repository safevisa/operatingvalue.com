import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import InvestmentSection from '@/components/InvestmentSection';

const InvestmentPage: React.FC = () => {
  return (
    <Layout
      title="投资与加盟 - CODPAL"
      description="加入CODPAL，共创全球电商未来"
    >
      <InvestmentSection />
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

export default InvestmentPage;
