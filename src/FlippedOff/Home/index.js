import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Text from 'components/base/Text';
import Screen, { Content, Title } from 'components/Screen';
import Header, { Left } from 'components/Header';
import ProgressBar from 'components/ProgressBar';
import Plus from 'icons/Plus';
import Logo from 'icons/Logo';

import EmptyState from './EmptyState';
import Menu from './Menu';

function Home({ sets }) {
  const history = useHistory();

  return (
    <Screen>
      <Header>
        <Left><Logo /></Left>
      </Header>

      <Title>My Sets</Title>

      <ProgressBar />

      <Content>
        {sets.length === 0 ? (
          <EmptyState onClick={() => history.push('/sets/create')}>
            <Plus />

            <Text color="darkGray" align="center">Create your first set!</Text>
          </EmptyState>
        ) : (
          <Menu sets={sets} />
        )}
      </Content>
    </Screen>
  );
}

Home.propTypes = {
  sets: PropTypes.array,
};

export default Home;
