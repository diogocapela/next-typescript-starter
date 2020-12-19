import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { FiMenu as OpenIcon } from 'react-icons/fi';
import { MdClose as CloseIcon } from 'react-icons/md';
import orderBy from 'lodash/orderBy';

import metadata from '@zd/config/metadata';
import { MOBILE_NAVBAR_LINKS } from '@zd/config/links';
import useRouter from '@zd/hooks/useRouter';
import useTranslation from '@zd/hooks/useTranslation';
import Link from '@zd/components/link';
import theme from '@zd/theme';

const GUTTER_PADDING = '15px';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${theme.variables.mobileNavbarHeight};
  display: flex;
  align-items: center;

  font-size: 1rem;
  font-weight: 400;
  z-index: ${theme.layers.navbar};
  color: ${theme.colors.white};
  background: ${theme.colors.mainBlue};
  border-bottom: 1px solid ${theme.colors.mainBorder};
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const LogoDiv = styled.div`
  & > * {
    display: block;
    height: 100%;
    padding: 0 ${GUTTER_PADDING};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1rem;
  }
`;

const MenuButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: ${theme.colors.white};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${GUTTER_PADDING};
  height: 100%;
  min-width: ${theme.variables.mobileNavbarHeight};

  &:focus {
    outline: none;
  }
`;

const CollapseDiv = styled.div`
  position: fixed;
  top: ${theme.variables.mobileNavbarHeight};
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: calc(100% - ${theme.variables.mobileNavbarHeight});
  color: ${theme.colors.white};
  background: ${theme.colors.mainBlue};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
`;

const Ul = styled.ul`
  > li {
    border-bottom: 1px solid ${theme.colors.mainBorder};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 1rem ${GUTTER_PADDING};
  color: ${theme.colors.white};

  & > div {
    display: flex;
    align-items: center;
  }

  & > span {
    display: flex;
    align-items: center;
    padding-right: 5px;
    margin-left: 0.25rem;
    font-size: 1.4rem;
  }
`;

const BottomDiv = styled.div`
  padding: ${GUTTER_PADDING};
`;

const Navbar: React.FC = (props) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      const { scrollY } = window;
      document.body.style.position = 'fixed';
      document.body.style.top = `${scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY?.split('px')?.[0] || '0', 10));
    }
  }, [open]);

  return (
    <Nav {...props}>
      <TopDiv>
        <LogoDiv>
          {open ? (
            <div>{metadata.website.name}</div>
          ) : (
            <Link href="/" onClick={() => setOpen(false)} title={metadata.website.name}>
              {metadata.website.name}
            </Link>
          )}
        </LogoDiv>
        <MenuButton onClick={() => setOpen(!open)} title={open ? 'Close menu' : 'Open menu'}>
          {open ? <CloseIcon /> : <OpenIcon />}
        </MenuButton>
      </TopDiv>
      {open && (
        <CollapseDiv>
          <Ul>
            {MOBILE_NAVBAR_LINKS.map(({ slug, href }) => (
              <li key={slug}>
                <StyledLink href={href} onClick={() => setOpen(false)} title={t(`common:links.${slug}`)}>
                  <div>{t(`common:links.${slug}`)}</div>
                  <span>&rsaquo;</span>
                </StyledLink>
              </li>
            ))}
          </Ul>
          <BottomDiv>
            <ul>
              {Object.values(metadata.locales).map((locale) => (
                <li key={locale.slug}>
                  <Link href={router.asPath} locale={locale.slug} title={locale.title}>
                    {locale.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              {metadata.website.name} © {new Date().getFullYear()}
            </div>
          </BottomDiv>
        </CollapseDiv>
      )}
    </Nav>
  );
};

export default Navbar;
