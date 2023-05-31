import React from "react";
import Card from 'react-bootstrap/Card';

const Frases = ({personaje}) => {
  return (
    <section>
      <h2>{personaje.character}</h2>
      <hr />
      <img src={personaje.image} alt={personaje.character} className="w-25 my-1"/>
      <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>
                {personaje.quote}
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
                {personaje.character} in <cite title="Source Title">The Simpsons</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frases;
