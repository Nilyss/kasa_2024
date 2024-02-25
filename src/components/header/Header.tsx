// styles
import './header.scss'

// types
import { ReactElement } from 'react'

// images
import kasaLogo from '../../assets/pictures/kasa_logo.webp'

// hooks
import { Link, NavLink } from 'react-router-dom'

export default function Header(): ReactElement {
  return (
    <header>
      <nav>
        <div className={'leftSide'}>
          <Link to={'/'}>
            <figure>
              <img src={kasaLogo} alt="kasa logo" />
            </figure>
          </Link>
        </div>
        <div className={'rightSide'}>
          <NavLink
            to={'/home'}
            className={({ isActive }: { isActive: boolean }): string =>
              isActive ? 'activeLink' : ''
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to={'/about'}
            className={({ isActive }: { isActive: boolean }): string =>
              isActive ? 'activeLink' : ''
            }
          >
            A Propos
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
