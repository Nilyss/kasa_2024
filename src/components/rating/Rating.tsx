// styles
import './rating.scss'

// types
import { ReactElement } from 'react'

// icons
import fulfilledStar from '../../assets/icons/fullfiledStar.webp'
import emptyStar from '../../assets/icons/emptyStar.webp'

/**
 * Renders a rating component based on the given rating value.
 *
 * @param {number} rating - The rating value to be displayed
 * @return {ReactElement} A figure element containing the rating stars
 */

export default function Rating({ rating }: { rating: number }): ReactElement {
  const stars: ReactElement[] = []
  for (let i: number = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<img key={i} src={fulfilledStar} alt="Pleine étoile" />)
    } else {
      stars.push(<img key={i} src={emptyStar} alt="Étoile vide" />)
    }
  }
  return <figure className="rating">{stars}</figure>
}
