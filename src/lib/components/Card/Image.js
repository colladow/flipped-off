import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import Input from 'components/base/Input';

export const EditImage = styled.i`
  top: ${props => props.theme.margin * 1.5}px;
  right: ${props => props.theme.margin * 1.5}px;
  position: absolute;
`;

export const ImageInput = styled(Input)`
  margin: ${props => props.theme.margin}px auto 0;
  font-size: ${props => props.theme.font.base}px;
  padding: 0 ${props => props.theme.margin}px;
  display: block;
  border-bottom: 1px solid #000;
  text-align: left;
  width: 80vw;
`;

const Container = styled.div`
  margin-bottom: ${props => props.theme.margin}px;
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 2;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  max-height: 60%;
`;

function Image({ url }) {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!url) {
      return;
    }

    const img = document.createElement('img');

    const onLoad = () => setStatus('loaded');
    const onError = () => setStatus('error');

    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError);

    img.src = url;

    return function cleanup() {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
    };
  }, [url]);

  return status === 'loaded' ? <Container url={url} /> : null;
}

Image.propTypes = {
  url: PropTypes.string,
};

export default Image;
