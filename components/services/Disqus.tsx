import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

import metadata from '@zd/config/metadata';
import useRouter from '@zd/hooks/useRouter';

type DisqusPropTypes = {
  slug: string;
  title: string;
};

const Disqus: React.FC<DisqusPropTypes> = (props) => {
  const { slug, title } = props;

  const router = useRouter();

  return (
    <DiscussionEmbed
      shortname={metadata.services.disqusShortname}
      config={{
        url: `${metadata.website.url}${router.asPath}`,
        identifier: slug,
        title,
      }}
    />
  );
};

export default Disqus;
