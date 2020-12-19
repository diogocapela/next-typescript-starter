import React from 'react';
import BootstrapContainer from 'react-bootstrap/Container';

const Container = (props) => {
  const { children } = props;

  return <BootstrapContainer {...props}>{children}</BootstrapContainer>;
};

export default Container;
