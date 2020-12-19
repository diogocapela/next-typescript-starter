import React from 'react';
import styled from '@emotion/styled';

import useTranslation from '@zd/hooks/useTranslation';
import Layout from '@zd/layouts/main';
import PageSEO from '@zd/components/page-seo';
import PageHeader from '@zd/components/page-header';
import { Container } from '@zd/components/grid';

import theme from '@zd/theme';

const Page: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <PageSEO title={t('pages/about:title')} description={t('pages/about:description')} />
      <PageHeader title={t('pages/about:title')} />
      <Container>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Peach</li>
        </ul>
        <ol>
          <li>Windows</li>
          <li>Linux</li>
          <li>macOS</li>
        </ol>
      </Container>
    </Layout>
  );
};

export default Page;
