const Card = ({ title, image, desc }) => {
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <img src={image} alt="country" />

      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
