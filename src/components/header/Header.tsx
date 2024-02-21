// types
import { ReactElement } from 'react'
import { HousingType } from '../../utils/types/HousingType.ts'

export default function Header(props: { data: HousingType[] }): ReactElement {
  const logements: HousingType[] = props['data']

  return (
    <header>
      <h1>Header</h1>

      {logements && (
        <ul>
          {logements.map((logement) => (
            <li key={logement.id}>{logement.title}</li>
          ))}
        </ul>
      )}
    </header>
  )
}
