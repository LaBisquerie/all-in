import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

function category({ catResults }) {
  const router = useRouter();
  const { id, title, description }  = router.query;

  return (
    <div className=''>
      <Header categories={catResults} />
      <p>category page, id : {id}, title : {title}, description {description}</p>
      <Footer />
    </div>
  )
}

export default category

export async function getServerSideProps() {
  try {
    const catResults = await fetch("http://127.0.0.1:8000/api/categories").
    then(res => res.json());

    return {
      props: {
        catResults,
      }
    }
  } catch(e) {
    console.log(e);
  }
}