import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'components/base/Button';
import TextArea from 'components/base/TextArea';
import Screen, { Content } from 'components/Screen';
import Header, { Left } from 'components/Header';
import Card from 'components/Card';
import handleEnterPress from 'handleEnterPress';

const LIMIT = 50;

const SetName = ({
  set,
  onNameChange,
  onNextClick,
}) => {
  const input = useRef(null);
  const { name } = set;
  const { length } = name;

  useEffect(() => input.current.focus(), []);

  return (
    <Screen>
      <Header>
        <Left><Link to="/">X</Link></Left>
      </Header>

      <Content>
        <Card
          title="Name your set"
          footer={`${length}/${LIMIT}`}
        >
          <TextArea
            type="text"
            ref={input}
            value={name}
            onChange={e => {
              const { value } = e.target;

              if (value.length <= LIMIT) {
                onNameChange(e.target.value)
              }
            }}
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
