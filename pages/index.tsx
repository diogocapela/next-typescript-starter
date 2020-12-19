import React from 'react';
import styled from '@emotion/styled';

import useTranslation from '@zd/hooks/useTranslation';
import Layout from '@zd/layouts/main';
import PageSEO from '@zd/components/page-seo';
import PageHeader from '@zd/components/page-header';

import theme from '@zd/theme';

const Page: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <PageSEO title={t('pages/home:title')} description={t('pages/home:description')} />
      <PageHeader title={t('pages/home:title')} />
    </Layout>
  );
};

export default Page;
