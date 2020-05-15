import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from 'components/base/Input';
import Button from 'components/base/Button';
import Screen, { Content } from 'components/Screen';
import Header, { Left } from 'components/Header';
import Card from 'components/Card';
import handleEnterPress from 'handleEnterPress';

const SetName = ({
  set,
  onNameChange,
  onNextClick,
}) => {
  const input = useRef(null);

  useEffect(() => input.current.focus(), []);

  return (
    <Screen>
      <Header>
        <Left><Link to="/">X</Link></Left>
      </Header>

      <Content>
        <Card>
          <Input
            type="text"
            ref={input}
            value={set.name}
            onChange={e => onNameChange(e.target.value)}
            onKeyPress={handleEnterPress(onNextClick)}
          />
        </Card>

        <Button onClick={onNextClick}>
          Next
        </Button>
      </Content>
    </Screen>
  );
};

SetName.propTypes = {
  set: PropTypes.object,
  onNameChange: PropTypes.func,
  onNextClick: PropTypes.func,
};

export default SetName;
