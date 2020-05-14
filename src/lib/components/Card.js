import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from 'components/base/Heading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5vh auto 0;
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  width: 80vw;
  height: 80vw;

  &:first-child {
    margin-top: 0;
  }
`;

const Card = ({ onClick, children }) => (
  <Container onClick={onClick}>
    <Heading>{children}</Heading>
  </Container>
);

Card.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Card;
