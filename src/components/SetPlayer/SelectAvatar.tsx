import { useEffect } from 'react';
import {getAPI} from '../../api/API'

export default function SelectAvatar({selectAvatar}: {selectAvatar: any}) {

  const avatarUrls: Object[] = []


  const getData = () => getAPI(2).then(
    (results) => {
      if(results.status === 200){
        // setData(results.data)
        console.log(results.data)
      }else{
        console.log(results)
      }
  })

  useEffect(() => {
    getData();
  })



  return (
    <label className="block font-game text-xl font-bold text-gray-900 dark:text-white mb-4">
      SELECT AVATAR

    </label>
  )
}
