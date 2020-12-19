import { useEffect } from 'react';
import { hotjar as ReactHotjar } from 'react-hotjar';

import metadata from '@zd/config/metadata';

const Hotjar = () => {
  useEffect(() => {
    ReactHotjar.initialize(metadata.services.hotjarId, 6); // Hotjar ID and Hotjar Snippet Version
  }, []);

  return null;
};

export default Hotjar;
