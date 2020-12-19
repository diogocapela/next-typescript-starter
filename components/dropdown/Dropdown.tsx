import React from 'react';
import styled from '@emotion/styled';
import BootstrapDropdownButton from 'react-bootstrap/DropdownButton';
import BootstrapDropdown from 'react-bootstrap/Dropdown';

import metadata from '@zd/config/metadata';
import useRouter from '@zd/hooks/useRouter';
import useTranslation from '@zd/hooks/useTranslation';
import Link from '@zd/components/link';

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

const LocaleDropdown: React.FC = (props) => {
  const router = useRouter();
  const { t, lang } = useTranslation();

  const currentLocale = lang.toUpperCase();

  return (
    <BootstrapDropdownButton menuAlign="right" title={currentLocale} id="dropdown-menu-align-right">
      {Object.values(metadata.locales).map((locale, i) => (
        <BootstrapDropdown.Item key={locale.slug} eventKey={`${i + 1}`}>
          <StyledLink href={router.asPath} locale={locale.slug}>
            {locale.title}
          </StyledLink>
        </BootstrapDropdown.Item>
      ))}
    </BootstrapDropdownButton>
  );
};

export default LocaleDropdown;
