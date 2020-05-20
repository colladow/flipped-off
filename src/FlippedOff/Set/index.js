import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, useParams } from 'react-router-dom';
import { Swipeable } from 'react-swipeable';

import Screen, { Content, Title } from 'components/Screen';
import Header, { Left, Right } from 'components/Header';
import Card from 'components/Card';
import ProgressBar from 'components/ProgressBar';
import Menu from 'icons/menu.svg';
import Arrow from 'icons/arrow.svg'; 

import Controls, { Button } from './Controls';
import ReturnToTop from './ReturnToTop';

// copied this shuffle algorithm from
// https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
function shuffle(cards) {
  for(let i = cards.length - 1; i > 0; i -= 1){
    const j = Math.floor(Math.random() * i);
    const temp = cards[i];

    cards[i] = cards[j];
    cards[j] = temp;
  }

  return cards;
}

function Set({ sets }) {
  const [showMenu, setShowMenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [managed, setManaged] = useState([]);
  const [forceFlip, setForceFlip] = useState(false);
  const id = parseInt(useParams().id);
  const progressBar = useRef(null);
  const set = sets.length && sets[id];
  let scrollBreakpoint;

  if (sets.length && !sets[id]) {
    return <Redirect to="/" />;
  }

  const size = (set.cards && set.cards.length) || 0;

  const handleScroll = () => {
    if (!scrollBreakpoint) {
      return;
    }

    setScrolled(
      document.body.scrollTop > scrollBreakpoint ||
      document.documentElement.scrollTop > scrollBreakpoint
    );
  }

  useEffect(() => {
    scrollBreakpoint = progressBar.current.getBoundingClientRect().top;

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (size) {
      setManaged([
        ...set.cards,
      ]);
    }
  }, [sets]);

  const flipAll = () => setForceFlip(!forceFlip);

  return (
    <Screen>
      <Header>
        <Left><Link to="/"><Arrow /></Link></Left>
        <Right>
          <Menu onClick={() => setShowMenu(!showMenu)} />
          <Controls visible={showMenu}>
            <Link to={`/sets/${id}/edit`}><Button>Edit Set</Button></Link>
            <Button
              onClick={() => {
                setManaged([
                  ...shuffle(managed),
                ]);
                setShowMenu(false);
              }}
            >
              Shuffle Order
            </Button>
            <Button
              onClick={() => {
                flipAll();
                setShowMenu(false);
              }}
            >
              Flip All
            </Button>
          </Controls>
        </Right>
      </Header>

      <Title>{set.name || ''}</Title>

      <ProgressBar
        ref={progressBar}
        percent={100/size * (currentIndex + 1)}
        fixed={scrolled}
      />

      <Content>
        <Swipeable
          preventDefaultTouchmoveEvent
          trackMouse={true}
          onSwipedUp={() => {
            const next = currentIndex + 1;

            if (next < size) {
              setCurrentIndex(next);
            }
          }}
          onSwipedDown={() => {
            const next = currentIndex - 1;

            if (next >= 0) {
              setCurrentIndex(next)
            }
          }}
        >
          {managed && managed.map((card, index) => (
            <Card
              key={index}
              card={card}
              scrollIn={currentIndex === index}
              forceFlip={forceFlip}
            />
          ))}
        </Swipeable>
      </Content>

      {scrolled && <ReturnToTop onClick={() => setCurrentIndex(0)} />}
    </Screen>
  );
}

Set.propTypes = {
  sets: PropTypes.array,
};

export default Set;
