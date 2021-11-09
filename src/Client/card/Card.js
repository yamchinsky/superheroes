const Card = ({ nickname, name, descr, superpower, phrase, image, id }) => {
  console.log(nickname);
  return (
    <div>
      <ul>
        <li>
          <h2>{nickname}</h2>
          <h3>{name}</h3>
          <p>{descr}</p>
          <p>{superpower}</p>
          <p>{phrase}</p>
          <img src='' alt='' />
          {image}
        </li>
      </ul>
    </div>
  );
};

export default Card;
