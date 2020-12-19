import React from 'react';
import styled from '@emotion/styled';

import metadata from '@zd/config/metadata';
import { FOOTER_SOCIAL_LINKS } from '@zd/config/links';
import { Container } from '@zd/components/grid';
import Link from '@zd/components/link';
import theme from '@zd/theme';

const FooterElement = styled.footer`
  border-top: 1px solid ${theme.colors.mainBorder};
`;

const InnerDiv = styled.div`
  border-top: 1px dashed white;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${theme.medias.gteMedium} {
    flex-direction: row;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;

  ${theme.medias.gteMedium} {
    justify-content: center;
    margin-top: 0;
  }
`;

const Li = styled.li`
  margin-right: 1rem;
  margin-bottom: 0;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterElement>
      <Container>
        <InnerDiv>
          <div>
            <Link href="/" title={metadata.website.name}>
              {metadata.website.name}
            </Link>{' '}
            © {new Date().getFullYear()}
          </div>
          <Ul>
            {FOOTER_SOCIAL_LINKS.map(({ title, href }) => (
              <Li key={title}>
                <Link href={href} title={title} target="_blank">
                  {title}
                </Link>
              </Li>
            ))}
          </Ul>
        </InnerDiv>
      </Container>
    </FooterElement>
  );
};

export default Footer;
