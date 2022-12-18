import { useEffect } from "react";

type Props = {
  submitBot: Function,
  submitUrl: Function,
  avatars: any
}

export default function SelectAvatar({submitBot, submitUrl, avatars}: Props) {

  const player = {
    player: {
      name: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  function selected(event) {
    document.querySelectorAll('img').forEach(e => {
      e.style.filter = "saturate(55%)";
    })
    event.target.style.filter = "saturate(1.2)";
  }

  function displayImages() {
    return avatars.map((avatar, index) => {
      return <span onClick={setPlayerAvatar} key={avatar.id}>
        <img onClick={selected} className="avatar-selector avatar-default h-48 w-48" src={avatar.frontUrl} alt={avatar.id} data-backurl={avatar.backUrl}/>
        </span>
    })
  }

  function setBotAvatar() {
    const filtered = avatars.filter(avatar => avatar.frontUrl !== player.player.frontUrl);
    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex].frontUrl;
  }

  function setPlayerAvatar(event) {
    player.player.frontUrl = event.target.src;
    player.player.backUrl = event.target.getAttribute("data-backurl");
  }

  function submitResults(event) {
    submitBot(setBotAvatar())
    submitUrl(player.player);
    event.preventDefault();
  }

  return (
    <>
      <form
        className="flex flex-col justify-center items-center bg-gray-100 rounded-md p-12 mx-12 h-fit w-5/6 shadow-md mt-24"
        onSubmit={submitResults}>
          <label className="block font-game text-xl font-bold text-gray-900 dark:text-white mb-4">
            SELECT AVATAR
          </label>
          <div
            className="flex flex-wrap justify-between items-center gap-12">
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
