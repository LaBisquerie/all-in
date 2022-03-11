import {React, useEffect} from 'react'
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { GrPower } from 'react-icons/gr';
import logo from "../assets/img/logo-test.svg";
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link';

function Header({ categories }) {
  const { user } = useUser()

  const router = useRouter();

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
    <header className='header'>
      {/* LEFT SIDE */}
      <div className='header-left'>
        <a className="header-left__toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
          <GiHamburgerMenu />
        </a>
        <div onClick={() => router.push("/")} className='header-logo'>
          <Image
            src={logo}
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasSidebarLabel">All-in</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className='offcanvas-list'>
              {categories?.map(({id, title, description}) => {
                return (
                  <li className='offcanvas-list__item'><a onClick={() => category(id, title, description)} className='offcanvas-list__link'>{title}</a>
                    <BsArrowRight />
                  </li>
                )
              }
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className='header-right'>
          <ul className='header-list d-none d-md-flex'>
            {!user && (
              <>
                <Link href="/api/auth/login">
                  <li className='header-list__item'><a className='header-list__link'>Inscription</a></li>
                </Link>
                <Link href="/api/auth/login">
                  <li className='header-list__item'><a className='header-list__link'>Connexion</a></li>
                </Link>
              </>
            )}
            {user && (
              <>
                <Link href="">
                  <li className='header-list__item'><a className='header-list__link'>{user.name}</a></li>
                </Link>
                <Link href="/api/auth/logout">
                  <li className='header-list__item'><a className='header-list__link'><GrPower /></a></li>
                </Link>
              </>
            )}
          </ul>
          <a href='#' className='d-md-none header-user'><FaUserAlt /></a>
      </div>
    </header>
  )
}

export default Header