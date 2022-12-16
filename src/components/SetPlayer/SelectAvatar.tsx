import { useEffect, useState } from 'react';
import {GetAvatars, isLoading} from '../../api/getAvatars'

interface AvatarsState {
  id: number, url: String
}

export default function SelectAvatar({selectAvatar}: {selectAvatar: any}) {
  const [avatar, setAvatar] = useState()

  useEffect(() =>  {
    const results = GetAvatars();
    setAvatar(results);
    console.log(avatars);
  }, []);

  // if(isLoading) return <div className="App">Loading...</div>;
  return (
    <>
      <label className="block font-game text-xl font-bold text-gray-900 dark:text-white mb-4">
        SELECT AVATAR
      </label>
    </>
  )
}
