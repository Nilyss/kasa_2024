// styles
import './home.scss'

// types
import { ReactElement } from 'react'
import { HousingType } from '../../utils/types/HousingType'
import { IHousingContextType } from '../../context/HousingContext'

// pictures
import bannerPicture from '../../assets/pictures/backgroundA.webp'

// components
import Banner from '../../components/banner/Banner'
import HomeCards from '../../components/homeCards/HomeCards'

// context
import { HousingContext } from '../../context/HousingContext'

// hooks
import { useContext } from 'react'

export default function Home(): ReactElement {
  const bannerFigcaption: string = 'Chez vous, partout et ailleurs'

  const bannerDatas: { picture: string; figcaption: string } = {
    picture: bannerPicture,
    figcaption: bannerFigcaption,
  }

  const { housing }: IHousingContextType = useContext(HousingContext)

  return (
    <main className={'homeMain'}>
      <Banner datas={bannerDatas} />
      <article className={'cardWrapper'}>
        {housing &&
          housing.map((card: HousingType) => {
            return <HomeCards key={card.id} datas={card} />
          })}
      </article>
    </main>
  )
}
