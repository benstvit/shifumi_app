import { useEffect } from "react";

type Props = {
  setUrl: Function,
  avatars: any
}

export default function SelectAvatar({setUrl, avatars}: Props) {

  useEffect(() => {
    console.log(avatars);
  })

  function updatePlayerAvatar(event) {
    console.log(event)
  }

  const displayImages = () => {
    return avatars.map((avatar, index) => {
      return <span className="hover:cursor-pointer">
                <img className="h-52 w-52 col-span-2 p-4 hover:cursor-pointer" src={avatar.imageUrl} alt={avatar.id}/>
            </span>
    })
  }

  return (
    <>
      <form
        className="flex flex-col justify-center items-center bg-gray-100 rounded-md p-24 shadow-md mt-24">
        <label className="block font-game text-xl font-bold text-gray-900 dark:text-white mb-4">
          SELECT AVATAR
        </label>
        <div className="grid grid-cols-4">
          {displayImages()}
        </div>
        <input
        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-400 cursor-pointer hover:border-blue-500 rounded"
        type="submit"
        value="Submit Avatar Choice"
        onSubmit={updatePlayerAvatar}
        />
      </form>
    </>

  )
}
