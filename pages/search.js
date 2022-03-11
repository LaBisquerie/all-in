import {React, useState} from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import Card from '../components/Card';
import Footer from '../components/Footer';

function search({ searchResults }) {
  const router = useRouter();
  const { service, location, startDate} = router.query; // Recuperer la recherche
  const myservice = service.toLowerCase();
  var count = 0;
  const firstLetterInUppercase = (a) => {
    return (a + '').charAt(0).toUpperCase()+a.substring(1);
  }

  // Récupérer le nombre de résultats
  searchResults.filter(function(result){return result.title.includes(myservice)}).map(({title}) => {
    if(title){
      count++
    }
    return count
  })


  return (
    <div className=''>
      <Header />
      <div className='container'>
        <div className='search-header'>
          <p className='search-header__context'>
            <span className='mx-1'>{count}</span>
            résultat(s) - {startDate.substring(0, startDate.length - 14)}
          </p>
          <h2 className='search-header__title'>{firstLetterInUppercase(service)} dans {firstLetterInUppercase(location)}</h2>
        </div>
        <div className='row'>
          {/* FILTER BLOCK */}
          <div className="block-filter">
            <ul className='block-filter__list'>
              <li className='block-filter__item'>Prix</li>
              <li className='block-filter__item'>Test</li>
              <li className='block-filter__item'>Test</li>
            </ul>
          </div>
          {/* RESULT BLOCK */}
          <div className='col-12'>
            {searchResults.filter(function(result){return result.title.includes(myservice)}).map(({id, title, description, author, duration, image, nbStars, price}) => {
                return (
                  <Card
                  key={id}
                  title={title}
                  description={description}
                  author={author}
                  duration={duration}
                  image={image}
                  nbStars={nbStars}
                  price={price}
                  />
                )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default search

export async function getServerSideProps() {
  const searchResults = await fetch("http://127.0.0.1:8000/api/activities").
  then(res => res.json());

  return {
    props: {
      searchResults,
    }
  }
}