import React from 'react';
import styled from 'styled-components';

import Close from './close.svg';

const Container = styled.i`
  & > svg {
    transform: rotate(45deg);
  }
`;

const Plus = () => <Container><Close /></Container>

export default Plus;
