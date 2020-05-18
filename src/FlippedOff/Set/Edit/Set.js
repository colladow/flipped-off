import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button, { SmallButton } from 'components/base/Button';
import BaseInput from 'components/base/Input';
import Text from 'components/base/Text';
import Screen, { Content, Footer } from 'components/Screen';
import Header, { Left, Right, Title } from 'components/Header';
import Grid, { Box } from 'components/Grid';
import handleEnterPress from 'handleEnterPress';

// TODO: maybe implement font resizing
const Input = styled(BaseInput)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Set({
  set,
  onSaveName,
  onDeleteSet,
  onCardClick,
}) {
  const [name, setName] = useState(set.name);
  const saveName = () => {
    const value = name.trim();

    if (value) {
      onSaveName(value);
    }
  }

  return (
    <Screen>
      <Header>
        <Left><Link to="/">X</Link></Left>
        <Title>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            onBlur={saveName}
            handleEnterPress={handleEnterPress(saveName)}
          />
        </Title>
        <Right><SmallButton>Select</SmallButton></Right>
      </Header>

      <Content footerButtons={1}>
        <Grid>
          {set.cards.map((card, index) => (
            <Box
              key={index}
              onClick={() => onCardClick(index)}
            >
              <Text>{card.side1.text}</Text>
            </Box>
          ))}
        </Grid>
      </Content>

      <Footer>
        <Button onClick={onDeleteSet}>Delete Set</Button>
      </Footer>
    </Screen>
  );
}

Set.propTypes = {
  set: PropTypes.object,
  onSaveName: PropTypes.func,
  onDeleteSet: PropTypes.func,
  onCardClick: PropTypes.func,
};

export default Set;
