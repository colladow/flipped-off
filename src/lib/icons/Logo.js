import React from 'react';
import styled from 'styled-components';

import LogoIcon from './logo.svg';

const SIZE = 40;

const Container = styled.i`
  width: ${SIZE}px;
  height: ${SIZE}px;
`;

const Logo = () => (
  <Container>
    <LogoIcon
      width={SIZE}
      height={SIZE}
      viewBox="0 0 192 192"
    />
  </Container>
);

export default Logo;
