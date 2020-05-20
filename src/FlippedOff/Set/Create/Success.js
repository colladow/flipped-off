import React from 'react';
import styled, { keyframes } from 'styled-components';

import Check from 'icons/checkmark.svg';

const SIZE = 200;

const fade = keyframes`
  from {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const toastDuration = 1000;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -${SIZE/2}px 0 0 -${SIZE/2}px;
  z-index: 300;
  animation: ${toastDuration}ms ${fade} ease-out;
  animation-iteration-count: 1;
`;

const Success = () => (
  <Container>
    <Check width={SIZE} height={SIZE} viewBox="0 0 36 36" />
  </Container>
);

export default Success;
