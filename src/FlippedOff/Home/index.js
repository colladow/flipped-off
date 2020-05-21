import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Text from 'components/base/Text';
import Screen, { Content, Title, Footer } from 'components/Screen';
import Header, { Left } from 'components/Header';
import ProgressBar from 'components/ProgressBar';
import Plus from 'icons/Plus';
import Logo from 'icons/Logo';

import EmptyState from './EmptyState';
import Menu from './Menu';

const PaddedContent = styled(Content)`
  padding-bottom: 8vh;
`;

const FixedFooter = styled(Footer)`
  background-color: ${props => props.theme.color.white};
  position: fixed;
  bottom: 0;
  padding: 0;
  z-index: 100;
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

            <Text color="darkGray" align="center">Create your first set!</Text>
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
