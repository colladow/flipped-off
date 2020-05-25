import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Heading from 'components/base/Heading';
import Plus from 'icons/Plus';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80vw;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Box = styled.div`
  border: 1px solid ${props => props.theme.color.gray};
  border-radius: 8px;
  height: ${props => props.theme.margin * 9}px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.theme.margin * 3}px;

  &:first-child {
    margin-top: 0;
  }
`;

const Set = styled(Box)`
  background-color: ${props => props.theme.color.base};
`;

const BoxText = styled(Heading)`
  font-size: ${props => props.theme.font.medium}px;
`;

function Menu({ sets }) {
  const history = useHistory();

  return (
    <Container>
      <Box onClick={() => history.push('/sets/create')}>
        <Plus />
      </Box>

      {sets && sets.map((set, index) => (
        <Set
          key={index}
          onClick={() => history.push(`/sets/${index}`)}
        >
          <BoxText color="white">{set.name}</BoxText>
        </Set>
      ))}
    </Container>
  );
}

Menu.propTypes = {
  sets: PropTypes.array,
};

export default Menu;
