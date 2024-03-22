// styles
import './housing.scss'

// types
import { ReactElement, Dispatch } from 'react'
import { NavigateFunction, Params } from 'react-router-dom'
import { HousingType } from '../../utils/types/HousingType.ts'
import { HostType } from '../../utils/types/HostType.ts'
import { IHousingContextType } from '../../context/HousingContext'

// context
import { HousingContext } from '../../context/HousingContext'

// hooks
import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// components
import Carousel from '../../components/carousel/Carousel'
import HostDetails from '../../components/hostDetails/HostDetails.tsx'
import Rating from '../../components/rating/Rating.tsx'
import Tag from '../../components/tag/Tag.tsx'
import Collapse from '../../components/collapse/Collapse.tsx'

export default function Housing(): ReactElement {
  const navigate: NavigateFunction = useNavigate()
  const { housing }: IHousingContextType = useContext(HousingContext)
  const searchParams: Readonly<Params> = useParams()
  const [width, setWidth]: [number, Dispatch<number>] = useState(
    window.innerWidth,
  )

  // selected housing datas
  const selectedHousing: HousingType =
    housing &&
    housing.find(
      (housing: HousingType): boolean => housing.id === searchParams.id,
    )

  // if no housing was fond by ID, redirect to 404 page.
  useEffect((): void => {
    if (!selectedHousing) {
      navigate('/404')
    }
  }, [selectedHousing, navigate])

  useEffect(() => {
    //   change the component displayed if we are on mobile or not
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile: boolean = width <= 768

  // host datas
  const hostFirstName: string =
    housing && selectedHousing.host.name.split(' ')[0]
  const hostLastName: string =
    housing && selectedHousing.host.name.split(' ')[1]
  const hostPicture: string = housing && selectedHousing.host.picture

  const hostDatas: HostType = housing && {
    firstName: hostFirstName,
    lastName: hostLastName,
    picture: hostPicture,
  }

  // tags datas
  const tags: string[] = housing && selectedHousing.tags

  // rating datas
  const rating: number = housing && parseInt(selectedHousing.rating)

  // collapse datas
  const descriptions: string = housing && selectedHousing.description
  const equipments: string[] = housing && selectedHousing.equipments
  const collapsesContent: { title: string; content: string | string[] }[] = [
    {
      title: 'Description',
      content: descriptions,
    },
    {
      title: 'Équipements',
      content: equipments,
    },
  ]

  return (
    <main className={'housing'}>
      {selectedHousing && (
        <>
          <Carousel datas={selectedHousing} />
          <article>
            {/* header of housing details */}
            <section>
              <div className={'titleWrapper'}>
                <h1>{selectedHousing.title}</h1>
                <p>{selectedHousing.location}</p>
              </div>
              {isMobile ? null : <HostDetails datas={hostDatas} />}
            </section>
            {/* tags & rating of housing details */}
            <section className={'tagsAndRatingContainer'}>
              <div className={"tagsAndRatingContainer__top"}>
                <div className={'tagsWrapper'}>
                {tags &&
                  tags.map(
                    (tag: string, index: number): ReactElement => (
                      <Tag key={index} tag={tag} />
                    ),
                  )}
                </div>
                <Rating rating={rating} />
                {isMobile ? <HostDetails datas={hostDatas} /> : null}
              </div>
            </section>

            {/* description of housing details */}
            <section className={'collapseWrapper'}>
              {collapsesContent.map(
                (
                  datas: { title: string; content: string | string[] },
                  index: number,
                ) => {
                  return (
                    <Collapse
                      key={index}
                      title={datas.title}
                      content={datas.content}
                    />
                  )
                },
              )}
            </section>
          </article>
        </>
      )}
    </main>
  )
}
