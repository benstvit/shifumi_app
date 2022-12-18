import { useEffect, useState } from 'react';
import {GetAvatars} from '../../api/getAvatars'
import SelectAvatar from './SelectAvatar'
import SelectName from './SelectName'

type playerProps = {
  submitName: any,
  submitUrl: any,
  gameState: Object
}

export default function SetPlayer ({submitName, submitUrl, gameState}: playerProps) {
  const [avatars, setAvatars] = useState<Object[]>([])

  const displayAvatar = () => {
    return gameState["player"].name && avatars?.length > 0;
  }

  function emit(payload, type) {
    type === "name" ? submitName(payload) : submitUrl(payload);
  }


  useEffect(() => {
    async function fetchAvatars() {
      const results = await GetAvatars();
      setAvatars(prevState => results);
    };
    fetchAvatars();
  }, [setAvatars])

  return (
      <>
       <div className="flex justify-center items-start h-screen">
        {!displayAvatar() &&<SelectName submitName={(payload) => emit(payload, "name")} />}

        { displayAvatar() && <SelectAvatar avatars={avatars} submitUrl={(payload) => emit(payload, "avatar")}/>}

       </div>
      </>
  )
}
