// styles
import './banner.scss'

// types
import { ReactElement } from 'react'

export default function Banner(props: {
  datas: { picture: string; figcaption?: string }
}): ReactElement {
  const { picture, figcaption }: { picture: string; figcaption?: string } =
    props.datas

  return (
    <>
      <figure
        className={figcaption ? 'bannerWrapperWithCaption' : 'bannerWrapper'}
      >
        <img src={picture} alt={'Bannière'} />
        {figcaption && <figcaption>{figcaption}</figcaption>}
      </figure>
    </>
  )
}
