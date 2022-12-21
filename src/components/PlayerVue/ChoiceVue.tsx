export default function ChoiceVue ({choice, player}: {choice: any, player: any}) {

    const actions = ['rock', 'paper', 'scissors'];

    function emoticon(index) {
      if (index === 0) return '✊';

      return index === 1 ? '✋' : '✌️';
    }

    return (
      <>
        <div className="flex flex-col justify-center items-center xl:flex-wrap xl:flex-row xl:justify-between w-5/6 h-1/3">
          {!player.choice && actions.map((action, index) => {
            return (
              <div className='flex flex-col justify-center' key={action}>
                <h1 className="text-4xl hidden xl:block">
                  {emoticon(index)}
                </h1>
                <button
                  type="button"
                  onClick={payload => choice(action)}
                  className="uppercase bg-white opacity-90 border-black border-2 rounded-md font-game hover:bg-blue-500 hover:text-white text-xs lg:text-base m-4 px-4 py-2">
                  {action}
                </button>
              </div>
            )
          })}
          <div className={`${player.action ? 'visible' :  'invisible'} items-end justify-start bg-white opacity-90 border-black border-2 rounded-md text-xs lg:text-base font-game w-full py-2`}>
            <p>{player.name.toUpperCase()} attacked with {player.action} !</p>
          </div>
        </div>
      </>
    )
  }
