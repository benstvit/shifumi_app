import { useEffect } from "react";

type Props = {
  avatars: any,
  playerName: string
  submitUrl: Function,
}

export default function SelectAvatar({avatars, playerName, submitUrl}: Props) {

  const data = {
    player: {
      name: '',
      frontUrl: '',
      backUrl: '',
    },
    bot: {
      frontUrl: ''
    }
  }

  function selected(event) {
    document.querySelectorAll('img').forEach(e => {
      e.style.filter = "saturate(55%)";
    })
    event.target.style.filter = "saturate(1.2)";
  }

  function displayImages() {
    return avatars.map((avatar) => {
      return <span onClick={setPlayerAvatar} key={avatar.id}>
        <img onClick={selected} className="avatar-selector avatar-default h-48 w-48" src={avatar.frontUrl} alt={avatar.id} data-backurl={avatar.backUrl}/>
        </span>
    })
  }

  function setBotAvatar() {
    const filtered = avatars.filter(avatar => avatar.frontUrl !== data.player.frontUrl);
    const randomIndex = Math.floor(Math.random() * filtered.length);
    data.bot.frontUrl = filtered[randomIndex].frontUrl;
  }

  function setPlayerAvatar(event) {
    data.player.frontUrl = event.target.src;
    data.player.backUrl = event.target.getAttribute("data-backurl");
  }

  function submitResults(event) {
    setBotAvatar()
    submitUrl(data);
    event.preventDefault();
  }

  return (
    <>
      <form
        className="flex flex-col justify-center items-center bg-gray-100 rounded-md p-12 mx-12 h-fit w-5/6 shadow-md mt-24"
        onSubmit={submitResults}>
          <label className="block font-game uppercase text-xl font-bold text-gray-900 dark:text-white mb-4">
            Please select your avatar, {playerName}
          </label>
          <div
            className="flex flex-wrap justify-between items-center gap-12 my-6">
            {displayImages()}
          </div>
          <input
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-4 px-4 border-b-4 border-blue-500 cursor-pointer hover:border-blue-700 rounded-md"
            type="submit"
            value="Submit Avatar Choice"
          />
      </form>
    </>

  )
}
