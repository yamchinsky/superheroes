import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getHero } from '../../redux/hero/hero.operations';
import { useHistory, useParams } from 'react-router';

import './HeroPage.scss';

const HeroPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getHero());
  }, [dispatch]);
  const { id } = useParams();

  const allHeroes = useSelector(state => state.hero.items);
  const getHeroById = _id => allHeroes.find(hero => hero._id === id);

  const selectedHeroObjById = getHeroById();

  const { nickname, name, descr, superpower, phrase, image, _id } =
    selectedHeroObjById;

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className='selectedHero_container' key={_id}>
      <button
        onClick={goBack}
        className='current-hero__button'
        style={{ position: 'absolute', top: 10, zIndex: 2 }}
      >
        Back to home
      </button>

      <div className='current-hero__back' onClick={() => history.push('/home')}>
        <img src={image} className='current-hero__img' />
      </div>

      <div className='current-hero__container'>
        <img className='current-hero__container-img' src={image} />
        <div className='current-hero__container-about'>
          <h1>{nickname}</h1>
          <p>{name}</p>
          <p>
            <b>{descr}</b>
          </p>
          <p>
            <b>{superpower} </b>
          </p>
          <p>{phrase}</p>
          <p style={{ marginTop: '20px' }}></p>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
