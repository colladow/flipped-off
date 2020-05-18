import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from 'components/base/Heading';

import Title from './Title';
import Content from './Content';
import Footer from './Footer';
import Image, { EditImage, ImageInput } from './Image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 5vh auto 0;
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  width: 80vw;
  height: 80vw;

  ${props => props.small && 'height: 40vw;'}

  &:first-child {
    margin-top: 0;
  }
`;

function Card({
  title,
  footer,
  small,
  canHaveImage,
  imageUrl,
  onClick,
  onImageUrlChange,
  children,
}) {
  const [editImage, setEditImage] = useState(false);
  const showSmallVersion = small && !imageUrl;

  return (
    <React.Fragment>
      <Container small={showSmallVersion} onClick={onClick}>
        {canHaveImage && !imageUrl && (
          <EditImage onClick={() => setEditImage(!editImage)}>
            E
          </EditImage>
        )}

        {title && <Title>{title}</Title>}

        <Content>
          {canHaveImage && imageUrl && (
            <Image url={imageUrl} />
          )}

          <Heading>{children}</Heading>
        </Content>

        {footer && <Footer>{footer}</Footer>}
      </Container>

      {editImage && (
        <ImageInput
          autoFocus
          type="url"
          value={imageUrl}
          onChange={onImageUrlChange}
        />
      )}
    </React.Fragment>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  footer: PropTypes.string,
  small: PropTypes.bool,
  canHaveImage: PropTypes.bool,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
  onImageUrlChange: PropTypes.func,
  children: PropTypes.node,
};

Card.defaultProps = {
  canHaveImage: false,
};

export default Card;
