import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layout';
import ContactSection from '@/components/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <Layout
      title="联系我们 - CODPAL"
      description="开启您的全球化之旅，联系我们获取更多信息"
    >
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

export default ContactPage;
