import React from 'react'
import Image from 'next/image'
import logo from "../assets/img/logo-test.svg";
import { useRouter } from "next/router"

function Footer() {

  const router = useRouter();

  return (
    <div className='footer'>
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-md-6 col-lg-3">
            <div className='footer-information'>
              <div class="footer-information__logo" onClick={() => router.push("/")}>
                <img src="https://res.cloudinary.com/drxtvqede/image/upload/v1649683079/logo-test_ln6kke.svg" alt="logo" className='img-fluid' />
              </div>
              <div className='footer-information__content'>
                <p class="footer-information__address">31 rue de Chabry 31400 Toulouse</p>
                <div className='footer-infomrmation__disponibility'>
                  <p className='footer-information__day'>
                    Mardi - Vendredi
                    <span>10h30-13h30 & 14h30-18h30</span>
                  </p>
                  <p className='footer-information__day'>
                    Samedi
                    <span>10h00-13h00 & 14h00-18h00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-5">
            <div class="footer-contact">
              <ul class="footer-contact__list">
                <li><a href="#" className='footer-contact__list-item'>Mentions légales</a></li>
                <li><a href="#" className='footer-contact__list-item'>Conditions d'utilisation</a></li>
                <li><a href="#" className='footer-contact__list-item'>Contactez-nous</a></li>
                <li><a href="#" className='footer-contact__list-item'>Plan du site</a></li>
                <li><a href="#" className='footer-contact__list-item'>Magasins</a></li>
                <li><a href="#" className='footer-contact__list-item'>Identifiant</a></li>
                <li><a href="#" className='footer-contact__list-item'>Mon compte</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="footer-newsletter">
              <h2 class="footer-newsletter__title">Notre newsletter</h2>
              <p className='footer-newsletter__text'>Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela nos informations de contact dans les conditions d'utilisation du site.</p>
              <div class="footer-newsletter__form">
                <input type="text" placeholder='Votre adresse e-mail' />
                <button>S'abonner</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer