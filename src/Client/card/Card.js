import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import './Card.scss';

import { deleteHero, getHeroById } from '../../redux/hero/hero.operations';

const Card = ({ nickname, name, descr, superpower, phrase, image, _id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const openCurrentCard = () => {
    dispatch(getHeroById(_id));
    history.push(`/hero/${_id}`);
  };

  const openEditCard = () => {
    dispatch(getHeroById(_id));
    history.push(`/hero/${_id}`);
  };

  return (
    <div className='Card__item'>
      <div className='Card__item__photo'>
        <img
          width='250'
          height='300'
          src={image}
          alt={`${nickname} photo`}
          className='Card__item__image'
          onClick={openCurrentCard}
        />
      </div>
      <div className='Card__item__content'>
        <div>
          <div>
            <h2 className='Card__item__nickname'>{nickname}</h2>
          </div>

          <div className='Card__item__wrap'>
            <button className='Card__item__edit__btn' onClick={openEditCard}>
              Edit
            </button>
            <button
              type='button'
              className='Card__item__del__btn'
              onClick={() => {
                dispatch(deleteHero(_id));
                history.push('/');
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
