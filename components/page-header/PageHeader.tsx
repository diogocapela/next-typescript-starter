import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Container } from '@zd/components/grid';
import theme from '@zd/theme';

const WrapperDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  ${theme.medias.gteMedium} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const H1 = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  font-weight: 600;
`;

const PageHeader = (props) => {
  const { title } = props;

  return (
    <WrapperDiv>
      <Container>
        <H1>{title}</H1>
      </Container>
    </WrapperDiv>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
