import React from 'react'

function Card({ id, title, description, author, duration, image, nbStars, price }) {
  const titleWithCaps = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div className='result-card'>
      <img src={image} alt="test" width={300} className="result-card__image" />
      <div class="result-card__text">
        <h3 class="result-card__title">{titleWithCaps}</h3>
        <p class="result-card__description">{description}</p>
        <div class="result-card__informations">
          <p class="result-card__price">{price} €</p>
          <p class="result-card__duration">{duration} minutes</p>
          <p class="result-card__stars">
            {nbStars}
          </p>
        </div>
        <a href="#" class="btn check-activities">Voir l'activité</a>
      </div>
    </div>
  )
}

export default Card