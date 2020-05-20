import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Screen, { Content, Title } from 'components/Screen';
import Header, { Left } from 'components/Header';
import Card from 'components/Card';
import Plus from 'icons/Plus';
import Logo from 'icons/Logo';

import ProgressBar from './Set/ProgressBar';

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
        <Card onClick={() => history.push('/sets/create')}>
          <Plus />
        </Card>

        {sets && sets.map((set, index) => (
          <Card
            key={index}
            onClick={() => history.push(`/sets/${index}`)}
          >
            {set.name}
          </Card>
        ))}
      </Content>
    </Screen>
  );
}

Home.propTypes = {
  sets: PropTypes.array,
};

export default Home;
