// styles
import './collapse.scss'

// types
import {
  ReactElement,
  Dispatch,
  SetStateAction,
  useRef,
  MutableRefObject,
} from 'react'

// hooks
import { useState, useEffect } from 'react'

// icons
import arrowUp from '../../assets/icons/arrowUp.webp'

export default function Collapse(props: {
  title: string
  content: string | string[]
}): ReactElement {
  const [isOpen, setIsOpen]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false)
  const [maxHeight, setMaxHeight]: [number, Dispatch<SetStateAction<number>>] =
    useState(0)
  const contentRef: MutableRefObject<null | HTMLDivElement> = useRef(null)

  const toggleIsOpen = (): void => {
    setIsOpen(!isOpen)
  }

  useEffect((): void => {
    if (isOpen && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight)
    } else {
      setMaxHeight(0)
    }
  }, [isOpen, contentRef])

  return (
    <div className={'collapse'}>
      <div className={'collapse__title'} onClick={toggleIsOpen}>
        <h2>{props.title}</h2>
        <span>
          <img
            src={arrowUp}
            alt={isOpen ? 'arrow down' : 'arrow up'}
            className={isOpen ? 'rotate' : 'reverse'}
          />
        </span>
      </div>
      <div
        ref={contentRef}
        className={`collapse__content`}
        style={{
          maxHeight: `${maxHeight}px`,
        }}
      >
        <div className={'collapse__content__wrapper'}>
          {typeof props.content === 'string' ? (
            <p>{props.content}</p>
          ) : (
            <ul>
              {props.content.map(
                (content: string, index: number): ReactElement => (
                  <li key={index}>
                    <p>{content}</p>
                  </li>
                ),
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
