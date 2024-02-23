// styles
import './about.scss'

// types
import { ReactElement } from 'react'

// pictures
import bannerPicture from '../../assets/pictures/backgroundB.webp'
import Banner from '../../components/banner/Banner.tsx'

export default function About(): ReactElement {
  const bannerDatas: { picture: string } = {
    picture: bannerPicture,
  }

  return (
    <main className={'aboutMain'}>
      <Banner datas={bannerDatas} />
    </main>
  )
}
