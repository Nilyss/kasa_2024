// hooks
import { Context, createContext, useState } from 'react'

// types
import { HousingType } from '../utils/types/HousingType.ts'
import { Dispatch, SetStateAction, ReactElement } from 'react'
export interface IHousingContextType {
  housing: HousingType[] | null
  getHousing: () => Promise<HousingType[]>
  isLoading: boolean
}

// service
import HousingService from '../API/services/HousingService.ts'
const housingService: HousingService = new HousingService()

// init context
export const HousingContext: Context<IHousingContextType> =
  createContext<IHousingContextType>({
    housing: null,
    getHousing: () => housingService.getHousing(),
    isLoading: false,
  })

// utils
export const isOnProduction: boolean = false

export const HousingProvider = ({ children }: { children: ReactElement }) => {
  // state
  const [housing, setHousing]: [
    HousingType[],
    Dispatch<SetStateAction<HousingType[] | null>>,
  ] = useState<HousingType[]>(null)

  const [isLoading, setIsLoading]: [
    boolean,
    Dispatch<SetStateAction<boolean>>,
  ] = useState<boolean>(false)

  const getHousing = async (): Promise<HousingType[]> => {
    setIsLoading(true)

    // wait 1.5s for development, simulate API call other than a simple JSON file like do the development environment.
    if(!isOnProduction) await new Promise((resolve) => setTimeout(resolve, 1500))

    const res: HousingType[] = await housingService.getHousing()
    if (res) {
      setHousing(res['logements'])
    }
    if (!res) setHousing(null)
    setIsLoading(false)
    return null
  }

  return (
    <HousingContext.Provider value={{ getHousing, housing, isLoading }}>
      {children}
    </HousingContext.Provider>
  )
}
