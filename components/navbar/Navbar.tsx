import React from 'react';
import styled from '@emotion/styled';

import theme from '@zd/theme';

import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

const StyledMobileNavbar = styled(MobileNavbar)`
  ${theme.medias.gteMedium} {
    display: none;
  }
`;

const StyledDesktopNavbar = styled(DesktopNavbar)`
  ${theme.medias.lteSmall} {
    display: none;
  }
`;

const Navbar: React.FC = () => {
  return (
    <>
      <StyledMobileNavbar />
      <StyledDesktopNavbar />
    </>
  );
};

export default Navbar;
