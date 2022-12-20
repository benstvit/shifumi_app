import axios from 'axios'
interface Params {
    baseUrl: string
    headers : any
    method: string
}

const getConfig: Params = {
  baseUrl: "https://pokeapi.co/api/v2/pokemon",
  headers: {
        "Authorization": "",
        },
  method: 'get'
}

export const getAPI = async (id: number): Promise<any> =>{
  return await axios({
      ...getConfig,
      url: `${getConfig.baseUrl}/${id}/`,
  }).then ( (response) => {
      return {
          status: response.status,
          data: response.data
      }
  }).catch((error) =>{
      return {
          status: error.status,
          data: error.response
      }
  })
}
