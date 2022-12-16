export default function SetPlayer ({submit}: {submit:any}) {
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
  //TO DO Fetch url from picked avatar
  // setUrl(event) {
  //   console.log(event)
  // }

  function submitResults(event) {
    submit(player.player);
    event.preventDefault();
  }

  return (
      <>
       <div className="h-screen w-full flex justify-center items-start">
          <form
            className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-24 shadow-sm mt-24"
            onSubmit={submitResults}>
            <label className="block font-game text-xl font-bold text-gray-900 dark:text-white mb-4">
              PLAYER NAME
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 font-mono text-sm text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Shifumi Nickname"
                // value={this.props.setName()}
                onChange={setName}
              />
            </label>
            <input
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 cursor-pointer hover:border-blue-500 rounded"
              type="submit"
              value="Submit"
             />
          </form>
       </div>
      </>
  )
}
