export default function SelectName({submitName}: {submitName: any}) {

  const player = {
    player: {
      name: "",
      url: ""
    }
  }

  function setName(event) {
    const userInput = event.target.value
    player.player.name = userInput
  }

  function submitResults(event) {
    submitName(player.player.name);
    event.preventDefault();
  }

  return (
    <>
      <form
        className="flex flex-col justify-center items-center bg-gray-100 rounded-md p-24 shadow-md mx-6 lg:mx-0 mt-24"
        onSubmit={submitResults}
        >
        <label className="block font-game text-xl font-bold text-gray-900 dark:text-white mb-4">
          PLAYER NAME
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 font-mono text-sm text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-6"
            placeholder="Your Shifumi Nickname"
            onChange={setName}
          />
        </label>
        <input
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-500 cursor-pointer hover:border-blue-700 rounded-md"
          type="submit"
          value="Submit Name"
        />
      </form>
    </>

  )
}
