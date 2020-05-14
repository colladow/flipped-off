import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BaseTitle from 'components/base/Title';
import Text from 'components/base/Text';

const Container = styled.div`
  width: 100vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 5vw;
`;

const Title = styled(BaseTitle)`
  width: 100%;
`;

const Button = styled(Text)`
  margin-right: ${props => props.theme.margin}px;

  &:last-child {
    margin-right: 0;
  }
`;

const Controls = ({ children }) => (
  <Container>
    <Title>{children}</Title>
    <Button>FS</Button>
    <Button>Shuffle</Button>
    <Button>Flip</Button>
  </Container>
);

Controls.propTypes = {
  children: PropTypes.node,
};

export default Controls;
