// types
import { HousingType } from '../../utils/types/HousingType.ts'

// service
import { APICalls } from '../APICalls.ts'
const apiCalls: APICalls = new APICalls()

export default class HousingService {
  async getHousing(): Promise<HousingType[]> {
    const endpoint: string = '/logements.json'
    return await apiCalls.getRequest(endpoint)
  }
}
