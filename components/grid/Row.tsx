import React from 'react';
import BootstrapRow from 'react-bootstrap/Row';

const Row = (props) => {
  const { children } = props;

  return <BootstrapRow {...props}>{children}</BootstrapRow>;
};

export default Row;
