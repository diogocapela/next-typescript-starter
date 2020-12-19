import React from 'react';
import styled from '@emotion/styled';

import Navbar from '@zd/components/navbar';
import Footer from '@zd/components/footer';
import theme from '@zd/theme';

const WrapperDiv = styled.div`
  background: ${theme.colors.white};
  margin-top: ${theme.variables.mobileNavbarHeight};
  min-height: calc(100vh - ${theme.variables.mobileNavbarHeight});

  ${theme.medias.gteMedium} {
    margin: 0 2rem;
    min-height: calc(100vh - ${theme.variables.desktopNavbarHeight});
  }
`;

const MainLayout: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <WrapperDiv>{children}</WrapperDiv>
      <Footer />
    </>
  );
};

export default MainLayout;
