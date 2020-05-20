import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Text from 'components/base/Text';
import Heading from 'components/base/Heading';
import Screen, { Content, Title } from 'components/Screen';
import Header, { Left } from 'components/Header';
import Card from 'components/Card';
import ProgressBar from 'components/ProgressBar';
import Plus from 'icons/Plus';
import Logo from 'icons/Logo';

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
          <Card onClick={() => history.push('/sets/create')}>
            <Plus />

            <Text color="darkGray" align="center">Create your first set!</Text>
          </Card>
        ) : (
          <React.Fragment>
            <Card onClick={() => history.push('/sets/create')}>
              <Plus />
            </Card>

            {sets && sets.map((set, index) => (
              <Card
                key={index}
                onClick={() => history.push(`/sets/${index}`)}
              >
                <Heading>{set.name}</Heading>
              </Card>
            ))}
          </React.Fragment>
        )}
      </Content>
    </Screen>
  );
}

Home.propTypes = {
  sets: PropTypes.array,
};

export default Home;
