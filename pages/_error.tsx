import React, { useEffect } from 'react';

import useRouter from '@zd/hooks/useRouter';
import PageSEO from '@zd/components/page-seo';

const ErrorPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return <PageSEO />;
};

export default ErrorPage;
