import React, { useState } from "react"
import {AiOutlineSearch} from "react-icons/ai"
import { useRouter } from "next/router"
import DatePicker from 'react-datepicker'

function Banner() {

  const [searchInput, setSearchInput] = useState("");
  const [searchService, setSearchService] = useState("");
  const [startDate, setStartDate] = useState(null);
  const router = useRouter();

  const search = () => { // ENVOYER LES DATAS A LA PAGE SEARCH, PASSAGE DANS L'URL
    router.push({
      pathname: '/search',
      query: {
        service: searchService,
        location: searchInput,
        startDate: startDate.toISOString(),
      }
    });
  }

  return (
    <div className='banner'>
      <video
      autoPlay
      loop
      muted
      id="header-video">
      <source src="https://res.cloudinary.com/drxtvqede/video/upload/v1645919449/video-header_wrr4xk.mp4" type="video/mp4" />
      </video>
      <h1 className="banner-title">All-in : Tous vos services et cours à domicile</h1>
      <form action="" method="get">
        <div className="product-search">
            <div className="search-element">
              <label className="search-label" htmlFor='services'>Services et cours particuliers</label>
              <input value={searchService} onChange={(e) => setSearchService(e.target.value)} className="search-input" type="text" placeholder="Que voulez-vous ?" name="services" id='services' />
            </div>
            <div className="search-element">
              <label className="search-label" htmlFor='where'>Adresse</label>
              <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="search-input" type="text" placeholder="Où ?" autoComplete="on" name="where" id='where' />
            </div>
            <div className="search-element date">
              <label className="search-label" htmlFor='when'>Date</label>
              <DatePicker selected={startDate} format="dd-MM-y" placeholderText="Quand ?" locale="fr"  onChange={(date) => setStartDate(date)} />
            </div>
            <a type="submit" onClick={search} className="search-button d-none d-md-flex"><AiOutlineSearch /></a>
            <a type='submit' onClick={search} className='search-button__mobile d-block d-md-none'> Rechercher <AiOutlineSearch /></a>
        </div>
      </form>
    </div>
  )
}

export default Banner