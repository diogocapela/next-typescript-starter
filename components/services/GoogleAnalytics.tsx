import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

import metadata from '@zd/config/metadata';
import useRouter from '@zd/hooks/useRouter';

const GoogleAnalytics = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize(metadata.services.googleAnalyticsId);
    setHasLoaded(true);
  }, []);

  if (hasLoaded) {
    ReactGA.pageview(router.asPath);
  }

  return null;
};

export default GoogleAnalytics;
