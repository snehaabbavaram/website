import React from 'react';

const Specials = ({ specials }) => {
  return (
    <div>
      <h1>Specials</h1>
      <div className="specials-list">
        {specials.map((special) => (
          <div key={special.id} className="special-item">
            <img src={special.image} alt={special.name} />
            <h3>{special.name}</h3>
            <p>{special.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;