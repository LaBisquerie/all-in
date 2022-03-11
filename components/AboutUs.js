import React from 'react'

function AboutUs() {
  return (
    <div className='container pt-2'>
      <div className='row align-items-center'>
        <div className='col-12 col-lg-6'>
          <div className='aboutus-content'>
            <p className='aboutus-subtitle'>All-in</p>
            <h2 className='aboutus-title'>A propos de nous</h2>
            <p className='aboutus-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsam ducimus
              id harum recusandae sequi quod voluptate officiis adipisci nesciunt
              quaerat rem exercitationem nemo aut maiores voluptatibus consectetur tempora vel.
              <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsam ducimus
              id harum recusandae sequi quod voluptate officiis adipisci nesciunt
              quaerat rem exercitationem nemo aut maiores voluptatibus consectetur tempora vel.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsam ducimus
              id harum recusandae sequi quod voluptate officiis adipisci nesciunt
              quaerat rem exercitationem nemo aut maiores voluptatibus consectetur tempora vel.
            </p>
          </div>
        </div>
        <div className='col-12 col-lg-6'>
          <div className='aboutus-photo'>
            <img src='https://res.cloudinary.com/drxtvqede/image/upload/v1646574165/all-in-phone_t6whxw.png' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs