import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UpArrow from 'icons/UpArrow';

const Container = styled.div`
  position: fixed;
  bottom: ${props => props.theme.margin * 2}px;
  right: ${props => props.theme.margin * 2}px;
  z-index: 200;
`;

const ReturnToTop = ({ onClick }) => (
  <Container onClick={onClick}>
    <UpArrow />
  </Container>
);

ReturnToTop.propTypes = {
  onClick: PropTypes.func,
};

export default ReturnToTop;
