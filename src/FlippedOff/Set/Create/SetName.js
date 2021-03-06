import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'components/base/Button';
import TextArea from 'components/base/TextArea';
import Screen, { PaddedContent, FixedFooter } from 'components/Screen';
import Header, { Left } from 'components/Header';
import EditCard from 'components/Card/Edit';
import Close from 'icons/close.svg';
import handleEnterPress from 'handleEnterPress';

const LIMIT = 30;

const SetName = ({
  set,
  onNameChange,
  onNextClick,
}) => {
  const input = useRef(null);
  const { name } = set;
  const { length } = name;

  useEffect(() => input.current.focus(), []);

  const submitName = () => {
    if (length > 0) {
      onNextClick();
    }
  };

  return (
    <Screen>
      <Header>
        <Left><Link to="/"><Close /></Link></Left>
      </Header>

      <PaddedContent>
        <EditCard
          title="Name your set"
          footer={`${length}/${LIMIT}`}
        >
          <TextArea
            ref={input}
            value={name}
            onChange={e => {
              const { value } = e.target;

              if (value.length <= LIMIT) {
                onNameChange(e.target.value)
              }
            }}
            onKeyPress={handleEnterPress(submitName)}
          />
        </EditCard>
      </PaddedContent>

      <FixedFooter>
        <Button onClick={submitName}>
          Next
        </Button>
      </FixedFooter>
    </Screen>
  );
};

SetName.propTypes = {
  set: PropTypes.object,
  onNameChange: PropTypes.func,
  onNextClick: PropTypes.func,
};

export default SetName;
