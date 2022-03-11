import React from 'react'
import { useRouter } from 'next/router';

function Category({ id, title, description, image }) {
  const router = useRouter();

  const fn = (text, count) => {
    return text.slice(0, count) + (text.length > count ? "..." : "");
  }

  const category = (id, title, description) => {
    router.push({
      pathname: '/category',
      query: {
        id: id,
        title: title,
        description: description,
      }
    })
  }

  return (
    <a onClick={() => category(id, title, description)} className='category-card'>
      <img src={image} alt={title} className='category-card__image' width={300} height={250} />
      <div className='category-card__content'>
        <h3 className='category-card__title'>{title}</h3>
        <p className='category-card__description'>{fn(description, 60)}</p>
        <a onClick={() => category(id, title, description)} className='category-card__button'>Découvrir</a>
      </div>
    </a>
  )
}

export default Category