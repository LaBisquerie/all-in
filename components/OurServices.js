import React from 'react'
import Category from './Category';

function OurServices({ categories }) {
  return (
    <div className='container pt-2'>
      <h2 className='services-title'>Les services</h2>
        <div className='services'>
          {categories?.map(({id, title, description, image}) => {
            return (
              <Category
              key={id}
              title={title}
              description={description}
              image={image}
              />
            )
          }
          )}
      </div>
    </div>
  )
}

export default OurServices