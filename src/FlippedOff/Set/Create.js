import React, { 
  useState,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import Input from 'components/base/Input';
import Button from 'components/base/Button';
import Screen, { Content } from 'components/Screen';
import Header, { Left } from 'components/Header';
import Card from 'components/Card';

import { createSet } from '../actions';

const Create = ({ dispatch }) => {
  const input = useRef(null);
  const [name, setName] = useState('');
  const history = useHistory();

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
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Card>

        <Button
          onClick={() => {
            if (name.length > 0) {
              dispatch(createSet(name));
              history.push('/');
            }
          }}
        >
          Next
        </Button>
      </Content>
    </Screen>
  );
};

Create.propTypes = {
  dispatch: PropTypes.func,
};

export default Create;
