import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Text from 'components/base/Text';
import Heading from 'components/base/Heading';
import Screen, { Content, Title } from 'components/Screen';
import Header, { Left } from 'components/Header';
import Card from 'components/Card';
import ProgressBar from 'components/ProgressBar';
import Plus from 'icons/Plus';
import Logo from 'icons/Logo';

const EmptyState = styled.div`
  border: 1px solid ${props => props.theme.color.gray};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 65vh;
  box-sizing: border-box;
  margin: 0 auto;
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

      <Content>
        {sets.length === 0 ? (
          <EmptyState onClick={() => history.push('/sets/create')}>
            <Plus />

            <Text color="darkGray" align="center">Create your first set!</Text>
          </EmptyState>
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
