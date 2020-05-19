import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageIcon from './image.svg';

const Container = styled.i`
  width: 16px;
  height: 16px;

  & .highlight {
    fill: ${props => props.theme.color.darkGray};

    ${props => props.highlight && `fill: ${props.theme.color.base};`}
  }
`;

const Image = ({ highlight }) => (
  <Container highlight={highlight}>
    <ImageIcon width={16} height={16} viewBox="0 0 36 36" />
  </Container>
);

Image.propTypes = {
  highlight: PropTypes.bool,
};

export default Image;
