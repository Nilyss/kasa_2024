// types
import { ReactElement } from 'react'
import { HousingType } from '../../utils/types/HousingType.ts'

// styles
import './homecards.scss'

// hooks
import { Link } from 'react-router-dom'

export default function HomeCards(props: { datas: HousingType }): ReactElement {
  const { cover, title, id }: { cover: string; title: string; id: string } =
    props.datas

  return (
    <Link to={`/housing/${id}`} className={'homeCards'}>
      <figure>
        <img src={cover} alt={'cover'} />
        <figcaption>{title}</figcaption>
      </figure>
    </Link>
  )
}
