import { useEffect, useState } from 'react';
import {GetAvatars} from '../../api/getAvatars'
import SelectAvatar from './SelectAvatar'
import SelectName from './SelectName'

export default function SetPlayer ({submit, playerState}: {submit:any, playerState: Object}) {
  const [avatars, setAvatars] = useState<Object[]>([])

  const displayAvatar = () => {
    return playerState["player"].name && avatars?.length > 0;
  }
  function setUrl(event) {
    console.log(event)
    console.log(avatars);
  }

  useEffect(() => {
    async function fetchAvatars() {
      const results = await GetAvatars();
      setAvatars(prevState => results);
    };
    fetchAvatars();
  }, [setAvatars])

  function submitResults(payload) {
    submit(payload);
  }

  useEffect(() => {
    console.log(playerState)
  })

  return (
      <>
       <div className="h-screen w-full flex justify-center items-start">
        {!displayAvatar() &&<SelectName submitName={(payload) => submitResults(payload)} />}

        { displayAvatar() && <SelectAvatar avatars={avatars} setUrl={setUrl}/>}

       </div>
      </>
  )
}
