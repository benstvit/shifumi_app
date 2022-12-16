import axios from 'axios'

interface Params {
    baseUrl: string
    headers : any
    method: string
}

const getConfig: Params = {
  baseUrl: "https://pokeapi.co/api/v2/pokemon/",
  headers: {
        "Authorization": "",
        "Access-Control-Allow-Origin": "*"
        },
  method: 'get'
}

export const getAPI = async (id: number): Promise<any> =>{
  return await axios({
      ...getConfig,
      url: `${getConfig.baseUrl}/${id}/`,
  }).then ( (response) => {
      console.log(response.data)
      return {
          status: response.status,
          data: response.data
      }
  }).catch((error) =>{
      console.log(error)
      return {
          status: error.status,
          data: error.response
      }
  })
}
