import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button, { SmallButton } from 'components/base/Button';
import BaseInput from 'components/base/Input';
import Text from 'components/base/Text';
import Screen, { PaddedContent, FixedFooter } from 'components/Screen';
import Header, { Left, Right, Title } from 'components/Header';
import Grid, { Box } from 'components/Grid';
import Close from 'icons/close.svg';
import handleEnterPress from 'handleEnterPress';

// TODO: maybe implement font resizing
const Input = styled(BaseInput)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Set({
  set,
  setId,
  onSaveName,
  onDeleteSet,
  onDeleteCards,
  onCardClick,
  onAddCardClick,
}) {
  const [name, setName] = useState(set.name);
  const [selectMode, toggleSelectMode] = useState(false);
  const [selected, updateSelected] = useState({});

  const saveName = () => {
    const value = name.trim();

    if (value) {
      onSaveName(value);
    }
  }

  return (
    <Screen>
      <Header>
        <Left><Link to={`/sets/${setId}`}><Close /></Link></Left>
        <Title>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            onBlur={saveName}
            handleEnterPress={handleEnterPress(saveName)}
          />
        </Title>
        <Right>
          <SmallButton
            onClick={() => {
              toggleSelectMode(!selectMode);

              if (selectMode) {
                updateSelected({});
              }
            }}
          >
            {selectMode ? 'Cancel': 'Select'}
          </SmallButton>
        </Right>
      </Header>

      <PaddedContent footerButtons={selectMode ? 2 : 1}>
        <Grid>
          {set.cards.map((card, index) => (
            <Box
              key={index}
              selected={selected[index]}
              selectMode={selectMode}
              onClick={() => {
                if (selectMode) {
                  updateSelected({
                    ...selected,
                    [index]: selected[index] ? undefined : true,
                  });
                } else {
                  onCardClick(index);
                }
              }}
            >
              <Text>{card.side1.text}</Text>
            </Box>
          ))}
          <Box
            primary
            onClick={onAddCardClick}
          >
            <Text color="white">Add Card +</Text>
          </Box>
        </Grid>
      </PaddedContent>

      <FixedFooter>
        {selectMode && (
          <Button
            onClick={() => {
              onDeleteCards(selected);
              toggleSelectMode(false);
              updateSelected({});
            }}
          >
            Delete Selected
          </Button>
        )}
        <Button onClick={onDeleteSet}>Delete Set</Button>
      </FixedFooter>
    </Screen>
  );
}

Set.propTypes = {
  set: PropTypes.object,
  setId: PropTypes.string,
  onSaveName: PropTypes.func,
  onDeleteSet: PropTypes.func,
  onDeleteCards: PropTypes.func,
  onCardClick: PropTypes.func,
  onAddCardClick: PropTypes.func,
};

export default Set;
