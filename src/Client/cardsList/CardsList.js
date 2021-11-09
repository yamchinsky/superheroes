import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getHero } from '../../redux/hero/hero.operations';
import Card from '../../Client/card/Card';

const CardsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHero());
  }, [dispatch]);

  const allHeroes = useSelector(state => state.hero.items);

  console.log(allHeroes);

  return (
    <div className='CardsListContainer'>
      <Card />
      {allHeroes.map(
        ({ nickname, name, descr, superpower, phrase, image, id }) => (
          <li key={id} className='CardsList'>
            <Card
              nickname={nickname}
              name={name}
              descr={descr}
              superpower={superpower}
              phrase={phrase}
              image={image}

              // onDelete={() => dispatch(deleteHero(id))}
            />
          </li>
        )
      )}
    </div>
  );
};

export default CardsList;
