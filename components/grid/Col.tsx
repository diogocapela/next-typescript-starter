import React from 'react';
import BootstrapCol from 'react-bootstrap/Col';

const Col = (props) => {
  const { children } = props;

  return <BootstrapCol {...props}>{children}</BootstrapCol>;
};

export default Col;
