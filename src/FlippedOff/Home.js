import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Screen, { Content } from 'components/Screen';
import Header, { Left } from 'components/Header';
import Card from 'components/Card';
import Plus from 'icons/Plus';

import Hamburger from './Menu/Hamburger';
import ProgressBar from './Set/ProgressBar';

function Home({ sets, onMenuClick }) {
  const history = useHistory();

  return (
    <Screen>
      <Header>
        <Left><Hamburger onClick={onMenuClick} /></Left>
      </Header>

      <ProgressBar />

      <Content>
        {sets && sets.map((set, index) => (
          <Card
            key={index}
            onClick={() => history.push(`/sets/${index}`)}
          >
            {set.name}
          </Card>
        ))}

        <Card onClick={() => history.push('/sets/create')}>
          <Plus />
        </Card>
      </Content>
    </Screen>
  );
}

Home.propTypes = {
  sets: PropTypes.array,
  onMenuClick: PropTypes.func,
};

export default Home;
