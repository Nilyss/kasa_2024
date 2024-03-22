// styles
import './carousel.scss'

// types
import { ReactElement } from 'react'
import { HousingType } from '../../utils/types/HousingType.ts'
import { Dispatch, SetStateAction } from 'react'

// hooks
import { useState } from 'react'

// images
import leftArrow from '../../assets/pictures/left.svg'
import rightArrow from '../../assets/pictures/right.svg'

export default function Carousel(props: { datas: HousingType }): ReactElement {
  const { pictures }: { pictures: string[] } = props.datas

  const [currentIndex, setCurrentIndex]: [
    number,
    Dispatch<SetStateAction<number>>,
  ] = useState(0)

  const nextSlide = (): void => {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const previousSlide = (): void => {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const length: number = pictures && pictures.length

  return (
    <div className={'carousel'}>
      <figure>
        {pictures && (
          <img src={pictures[currentIndex]} alt={props.datas.title} />
        )}
      </figure>
      {length > 1 && (
        <>
          <button className={'previous'} onClick={previousSlide}>
            <img src={leftArrow} alt={'chevron'} />
          </button>
          <button className={'next'} onClick={nextSlide}>
            <img src={rightArrow} alt={'chevron'} />
          </button>
          <div>
            {currentIndex + 1}/{length}
          </div>
        </>
      )}
    </div>
  )
}
