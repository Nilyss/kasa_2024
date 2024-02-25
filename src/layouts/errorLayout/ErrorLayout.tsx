// styles
import './errorLayout.scss'

// types
import { ReactElement } from 'react'

// hooks
import {Link} from 'react-router-dom'

// images
import error from '../../assets/pictures/404.webp'

export default function ErrorLayout(): ReactElement {
  return (
    <main className={'errorPage'}>
      <figure>
        <img src={error} alt="404" />
      </figure>
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <Link to={'/home'}>Retourner sur la page d’accueil</Link>
    </main>
  )
}
