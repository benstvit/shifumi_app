import { useEffect, useState } from 'react';
import {GetAvatars} from '../../api/getAvatars'
import SelectAvatar from './SelectAvatar'
import SelectName from './SelectName'

type playerProps = {
  submitName: any,
  submitUrl: any,
  playerState: Object
}

export default function SetPlayer ({submitName, submitUrl, playerState}: playerProps) {
  const [avatars, setAvatars] = useState<Object[]>([])

  const displayAvatar = () => {
    return playerState["player"].name && avatars?.length > 0;
  }
  // function setUrl(event) {
  //   console.log(event)
  //   console.log(avatars);
  // }

  function emitName(payload) {
    submitName(payload);
  }

  function emitUrl(payload) {
    submitUrl(payload);
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
       <div className="h-screen w-full flex justify-center items-start">
        {!displayAvatar() &&<SelectName submitName={(payload) => emitName(payload)} />}

        { displayAvatar() && <SelectAvatar avatars={avatars} submitUrl={(payload) => emitUrl(payload)}/>}

       </div>
      </>
  )
}
