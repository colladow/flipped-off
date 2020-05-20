import React from 'react';
import styled from 'styled-components';

import Arrow from './arrow.svg';

const Container = styled.i`
  & > svg {
    transform: rotate(90deg);

    .bg {
      fill: transparent;
    }
  }
`;

const UpArrow = () => <Container><Arrow /></Container>

export default UpArrow;
