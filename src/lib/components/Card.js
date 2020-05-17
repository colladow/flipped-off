import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from 'components/base/Text';
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

const Title = styled(Text)`
  color: ${props => props.theme.color.darkGray};
  margin-top: ${props => props.theme.margin * 1.5}px;
  text-align: center;
  width: 100%;
`;

const Content = styled(Heading)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
`;

const Footer = styled(Title)`
  margin: 0 ${props => `${props.theme.margin * 2}px ${props.theme.margin}px`} 0;
  text-align: right;
`;

const Card = ({ title, footer, onClick, children }) => (
  <Container onClick={onClick}>
    {title && <Title>{title}</Title>}

    <Content>{children}</Content>

    {footer && <Footer>{footer}</Footer>}
  </Container>
);

Card.propTypes = {
  title: PropTypes.string,
  footer: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Card;
