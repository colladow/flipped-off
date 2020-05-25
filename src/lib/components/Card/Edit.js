import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ImageIcon from 'icons/Image';

import Container from './Container';
import Title from './Title';
import Content from './Content';
import Footer from './Footer';
import Image, { EditImage, ImageInput } from './Image';

function Edit({
  title,
  footer,
  small,
  canEditImage,
  imageUrl,
  onClick,
  onImageUrlChange,
  children,
}) {
  const [editImage, setEditImage] = useState(canEditImage && !!imageUrl);
  const showSmallVersion = small && !imageUrl;

  return (
    <React.Fragment>
      <Container small={showSmallVersion} onClick={onClick}>
        {canEditImage && (
          <EditImage onClick={() => setEditImage(!editImage)}>
            <ImageIcon highlight={editImage} />
          </EditImage>
        )}

        {title && <Title>{title}</Title>}

        <Content>
          {imageUrl && (
            <Image url={imageUrl} />
          )}

          {children}
        </Content>

        {footer && <Footer>{footer}</Footer>}
      </Container>

      {editImage && (
        <ImageInput
          autoFocus
          type="url"
          placeholder="Paste image url..."
          value={imageUrl}
          onChange={onImageUrlChange}
        />
      )}
    </React.Fragment>
  );
}

Edit.propTypes = {
  title: PropTypes.string,
  footer: PropTypes.string,
  small: PropTypes.bool,
  canEditImage: PropTypes.bool,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
  onImageUrlChange: PropTypes.func,
  children: PropTypes.node,
};

Edit.defaultProps = {
  canHaveImage: false,
};

export default Edit;
