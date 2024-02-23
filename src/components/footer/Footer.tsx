// styles
import './footer.scss'

// types
import { ReactElement } from 'react'

// images
import logo from '../../assets/pictures/kasa_logo-alt.webp'

export default function Footer(): ReactElement {
  return (
    <footer>
      <div className={"footerContent"}>
        <figure>
          <img src={logo} alt={'logo'} />
        </figure>
        <p>© 2022 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
