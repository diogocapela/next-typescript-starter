import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import metadata from '@zd/config/metadata';
import useRouter from '@zd/hooks/useRouter';
import useTranslation from '@zd/hooks/useTranslation';
import { DESKTOP_NAVBAR_LINKS } from '@zd/config/links';
import { Container } from '@zd/components/grid';
import Dropdown from '@zd/components/dropdown';
import Link from '@zd/components/link';
import theme from '@zd/theme';

const WrapperNav = styled.nav`
  height: ${theme.variables.desktopNavbarHeight};
  background: ${theme.colors.mainBackground};
  padding-bottom: 0.75rem;

  ${theme.medias.gteSmall} {
    padding-top: 0.75rem;
  }
`;

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoStyledLink = styled(Link)`
  color: ${theme.colors.white};
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    color: ${theme.colors.white};
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

const Li = styled.li`
  &:not(:last-child) {
    margin-right: 1.75rem;
  }
`;

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>`
  color: ${theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.07rem;

  &:hover {
    color: ${theme.colors.white};
  }

  ${theme.medias.gteMedium} {
    font-size: 1rem;
  }

  ${({ active }) =>
    css`
      color: ${active ? 'red' : 'white'};
    `}
`;

const DesktopNavbar: React.FC = (props) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <WrapperNav {...props}>
      <StyledContainer>
        <LogoStyledLink href="/" title={metadata.website.name}>
          {metadata.website.name}
        </LogoStyledLink>
        <Ul>
          {DESKTOP_NAVBAR_LINKS.map(({ href, slug }) => (
            <Li key={href}>
              <StyledLink href={href} active={router.pathname === href}>
                {t(`common:links.${slug}`)}
              </StyledLink>
            </Li>
          ))}
          <Dropdown>
            <Li>
              <StyledLink href={router.asPath} locale="en" active={false}>
                English
              </StyledLink>
            </Li>
            <Li>
              <StyledLink href={router.asPath} locale="pt" active={false}>
                Português
              </StyledLink>
            </Li>
          </Dropdown>
        </Ul>
      </StyledContainer>
    </WrapperNav>
  );
};

export default DesktopNavbar;
