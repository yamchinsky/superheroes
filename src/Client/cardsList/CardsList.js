import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrowUp from '../../assets/icons/arrow-up.png';
import { getHero } from '../../redux/hero/hero.operations';
import Card from '../../Client/card/Card';
import './CardsList.scss';
import '../card/Card.scss';
import InfiniteScroll from 'react-infinite-scroll-component';

const CardsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getHero());
  }, [dispatch]);

  const allHeroes = useSelector(state => state.hero.items);
  const handleScroll = () => {
    const el = document.querySelector('.scroll_to_top');
    if (window.pageYOffset > 600) {
      el.classList.add('scroll_to_top-active');
    } else {
      el.classList.remove('scroll_to_top-active');
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ul className='CardsList'>
      <InfiniteScroll
        dataLength={allHeroes.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={<div>Loading...</div>}
        className={'CardsList'}
        onScroll={handleScroll}
      >
        {allHeroes.map(
          ({ nickname, name, descr, superpower, phrase, image, _id }) => (
            <li key={_id}>
              <Card
                nickname={nickname}
                name={name}
                descr={descr}
                superpower={superpower}
                phrase={phrase}
                image={image}
                _id={_id}
              />
            </li>
          )
        )}
        <div className='scroll_to_top' onClick={scrollToTop}>
          <img src={arrowUp} alt='arrow' style={{ height: 25 }} />
        </div>
      </InfiniteScroll>
    </ul>
  );
};

export default CardsList;
