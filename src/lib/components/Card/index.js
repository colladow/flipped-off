import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from 'components/base/Heading';

import BaseContainer from './Container';
import BaseContent from './Content';
import Image from './Image';

const Container = styled(BaseContainer)`
  box-shadow: none;
  perspective: 1000px;
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 800ms ease;
  transform-style: preserve-3d;

  ${props => props.flipped && 'transform: rotateY(180deg);'}
`;

const Content = styled(BaseContent)`
  position: absolute;
  height: 100%;
  backface-visibility: hidden;

  ${props => props.back && 'transform: rotateY(180deg);'}
`;

function Card({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Container onClick={() => setFlipped(!flipped)}>
      <Inner flipped={flipped}>
        <Content>
          {card.side1.imageUrl && (
            <Image url={card.side1.imageUrl} />
          )}

          <Heading>{card.side1.text}</Heading>
        </Content>

        <Content back>
          {card.side2.imageUrl && (
            <Image url={card.side2.imageUrl} />
          )}

          <Heading>{card.side2.text}</Heading>
        </Content>
      </Inner>
    </Container>
  );
}

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
