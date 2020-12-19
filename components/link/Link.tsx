import React from 'react';
import NextLink from 'next/link';
import styled from '@emotion/styled';

import useTranslation from '@zd/hooks/useTranslation';

const A = styled.a`
  display: inline-block;
  color: inherit;

  &:hover {
    color: inherit;
  }
`;

type LinkPropTypes = {
  children: React.ReactNode;
  as?: any;
  href?: string;
  title?: string;
  onClick?: () => void;
  target?: string;
  locale?: string;
};

const Link: React.FC<LinkPropTypes> = (props) => {
  const { children, as, href, title, onClick = () => undefined, target = '_self', locale, ...rest } = props;

  const { lang } = useTranslation();

  const isNativeAnchor = target === '_blank' || href.startsWith('tel') || href.startsWith('mailto');

  return isNativeAnchor ? (
    <A
      aria-label={title}
      title={title}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : ''}
      onClick={onClick}
      {...rest}
    >
      {children}
    </A>
  ) : (
    <NextLink as={as} href={href} locale={locale || lang} passHref>
      <A aria-label={title} title={title} onClick={onClick} {...rest}>
        {children}
      </A>
    </NextLink>
  );
};

export default Link;
