// styles
import './about.scss'

// types
import { ReactElement } from 'react'

// pictures
import bannerPicture from '../../assets/pictures/backgroundB.webp'
import Banner from '../../components/banner/Banner.tsx'

// components
import Collapse from '../../components/collapse/Collapse.tsx'

export default function About(): ReactElement {
  const bannerDatas: { picture: string } = {
    picture: bannerPicture,
  }

  const collapsesContent: {
    title: string
    content: string | string[]
  }[] = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Sécurité',
      content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`,
    },
  ]

  return (
    <main className={'aboutMain'}>
      <Banner datas={bannerDatas} />
      <div className={'aboutContent'}>
        {collapsesContent.map(
          (collapse: { title: string; content: string | string[] }) => {
            return (
              <Collapse
                key={collapse.title}
                title={collapse.title}
                content={collapse.content}
              />
            )
          },
        )}
      </div>
    </main>
  )
}
