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

function Set({ sets }) {
  const [showMenu, setShowMenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <Screen>
      <Header>
        <Left><Link to="/"><Arrow /></Link></Left>
        <Right>
          <Menu onClick={() => setShowMenu(!showMenu)} />
          <Controls visible={showMenu}>
            <Link to={`/sets/${id}/edit`}><Button>Edit Set</Button></Link>
            <Button>Shuffle Order</Button>
            <Button>Flip Order</Button>
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
          {set.cards && set.cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              scrollIn={currentIndex === index}
            />
          ))}
        </Swipeable>
      </Content>
    </Screen>
  );
}

Set.propTypes = {
  sets: PropTypes.array,
};

export default Set;
