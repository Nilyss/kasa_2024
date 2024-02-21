// hooks
import { Context, createContext, useState } from 'react'

// types
import { HousingType } from '../utils/types/HousingType.ts'
import { Dispatch, SetStateAction, ReactElement } from 'react'
export interface IHousingContextType {
  housing: HousingType[] | null
  getHousing: () => Promise<HousingType[]>
}

// service
import HousingService from '../API/services/HousingService.ts'
const housingService: HousingService = new HousingService()

// init context
export const HousingContext: Context<IHousingContextType> =
  createContext<IHousingContextType>({
    housing: null,
    getHousing: () => housingService.getHousing(),
  })

export const HousingProvider = ({ children }: { children: ReactElement }) => {
  // state
  const [housing, setHousing]: [
    HousingType[],
    Dispatch<SetStateAction<HousingType[] | null>>,
  ] = useState<HousingType[]>(null)

  const getHousing = async (): Promise<HousingType[]> => {
    const res: HousingType[] = await housingService.getHousing()
    if (res) {
      setHousing(res['logements'])
    }
    if (!res) setHousing(null)
    return null
  }

  return (
    <HousingContext.Provider value={{ getHousing, housing }}>
      {children}
    </HousingContext.Provider>
  )
}
