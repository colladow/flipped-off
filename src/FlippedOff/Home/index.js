import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import BaseText from 'components/base/Text';
import Screen, { PaddedContent, Title, FixedFooter } from 'components/Screen';
import Header, { Left } from 'components/Header';
import ProgressBar from 'components/ProgressBar';
import Plus from 'icons/Plus';
import Logo from 'icons/Logo';

import EmptyState from './EmptyState';
import Menu from './Menu';

const Text = styled(BaseText)`
  margin-top: ${props => props.theme.margin}px;
`;

function Home({ sets }) {
  const history = useHistory();

  return (
    <Screen>
      <Header>
        <Left><Logo /></Left>
      </Header>

      <Title>My Sets</Title>

      <ProgressBar />

      <PaddedContent>
        {sets.length === 0 ? (
          <EmptyState onClick={() => history.push('/sets/create')}>
            <Plus />

            <Text align="center">Create your first set!</Text>
          </EmptyState>
        ) : (
          <Menu sets={sets} />
        )}
      </PaddedContent>

      <FixedFooter>
        <Text align="center">&copy; Wilson Collado 2020</Text>
      </FixedFooter>
    </Screen>
  );
}

Home.propTypes = {
  sets: PropTypes.array,
};

export default Home;
