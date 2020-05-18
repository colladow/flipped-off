import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button, { SmallButton } from 'components/base/Button';
import Input from 'components/base/Input';
import Text from 'components/base/Text';
import Screen, { Content, Footer } from 'components/Screen';
import Header, { Left, Right, Title } from 'components/Header';
import Grid, { Box } from 'components/Grid';

const Set = ({ set, onCardClick }) => (
  <Screen>
    <Header>
      <Left><Link to="/">X</Link></Left>
      <Title>
        <Input
          type="text"
          value={set.name}
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
      <Button>Delete Set</Button>
    </Footer>
  </Screen>
);

Set.propTypes = {
  set: PropTypes.object,
  onCardClick: PropTypes.func,
};

export default Set;
