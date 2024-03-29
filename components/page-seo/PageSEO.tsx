import React from 'react';
import Head from 'next/head';

import metadata from '@zd/config/metadata';

type PageSEOPropTypes = {
  title?: string;
  description?: string;
  thumbnail?: string;
};

const PageSEO: React.FC<PageSEOPropTypes> = (props) => {
  const { title, description, thumbnail } = props;

  const curatedTitle = title || `${metadata.website.name} — ${metadata.website.slogan}`;
  const curatedDescription = description || metadata.website.description;
  const curatedThumbnail = thumbnail || metadata.website.thumbnail;

  return (
    <Head>
      {/* Page Title */}
      <title>{curatedTitle}</title>
      <meta name="twitter:title" content={curatedTitle} />
      <meta property="og:title" content={curatedTitle} />
      <meta itemProp="name" content={curatedTitle} />

      {/* Page Description */}
      <meta name="description" content={curatedDescription} />
      <meta name="summary" content={curatedDescription} />
      <meta name="subject" content={curatedDescription} />
      <meta name="topic" content={curatedDescription} />
      <meta name="abstract" content={curatedDescription} />
      <meta name="twitter:description" content={curatedDescription} />
      <meta property="og:description" content={curatedDescription} />
      <meta itemProp="description" content={curatedDescription} />

      {/* Page Thumbnail */}
      <meta name="twitter:image:src" content={curatedThumbnail} />
      <meta property="og:image" content={curatedThumbnail} />
      <meta itemProp="image" content={curatedThumbnail} />
    </Head>
  );
};

export default PageSEO;
