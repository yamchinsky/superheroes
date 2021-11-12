const getAllHeroes = state => state.hero.items;

const getOneHero = state => state.hero;

const selectHeroesObject = state => state.hero;

const selectHeroeSelectedId = state =>
  selectHeroesObject(state).heroeSelectedId;

const selectHeroesArray = state => selectHeroesObject(state).array;

const getHeroId = state => state.hero.items._id;

const findById = (heroes, heroeSelectedId) =>
  heroes.filter(({ id }) => id === heroeSelectedId)[0];

const selectHero = state => {
  const heroeSelectedId = selectHeroeSelectedId(state);
  const hero = selectHeroesArray(state);
  return findById(hero, heroeSelectedId);
};

export {
  getAllHeroes,
  findById,
  selectHero,
  selectHeroeSelectedId,
  getHeroId,
  getOneHero
};
