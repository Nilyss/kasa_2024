import { isOnProduction } from '../utils/toolsFunctions.ts'

// types
import { HousingType } from '../utils/types/HousingType.ts'

interface IAPICalls {
  isValidStatusCode: number[]
  isOnProduction: boolean
  url: string
  getRequest(endpoint: string): Promise<HousingType[]>
}

export class APICalls implements IAPICalls {
  isValidStatusCode: number[] = [200, 201, 204]
  isOnProduction: boolean = isOnProduction
  url: string = isOnProduction
    ? 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1'
    : 'https://nilyss.github.io/Kasa_datas'

  /**
   * An asynchronous function to make a request to the specified endpoint and return the response data.
   *
   * @param {string} endpoint - the endpoint to make the request to
   * @return {Promise<HousingType[]>} a promise that resolves to the response data
   */
  async getRequest(endpoint: string): Promise<HousingType[]> {
    try {
      return await fetch(this.url + endpoint)
        .then((res: Response) => res.json())
        .then((data) => data)
        .catch((err): void => {
          console.error(err)
        })
    } catch (err) {
      console.error(err)
    }
  }
}
