import { useEffect } from "react";

type Props = {
  submitUrl: Function,
  avatars: any
}

export default function SelectAvatar({submitUrl, avatars}: Props) {

  const player = {
    player: {
      name: "",
      url: ""
    }
  }

  function displayImages() {
    return avatars.map(avatar => {
      return <span onClick={setPlayerAvatar} key={avatar.id}><img className="h-52 w-52 col-span-2 p-4 hover:cursor-pointer" src={avatar.imageUrl} alt={avatar.id}/></span>
    })
  }

  function setPlayerAvatar(event) {
    player.player.url = event.target.src;
    console.log(player);
  }

  function submitResults(event) {
    submitUrl(player.player.url);
    event.preventDefault();
  }

  return (
    <>
      <form
        className="flex flex-col justify-center items-center bg-gray-100 rounded-md p-24 shadow-md mt-24"
        onSubmit={submitResults}>
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
        />
      </form>
    </>

  )
}
