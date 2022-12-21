import ChoiceVue from './ChoiceVue'

type PlayerProps = {
  player: {
    name: string,
    backUrl: string,
    action: string,
  },
  choice: Function,
}

export default function PlayerVue ({player, choice}: PlayerProps) {

    function displayAvatar() {
      return <span>
          <img className="w-52 h-52 lg:h-60 lg:w-60" src={player.backUrl} alt="player-avatar" />
        </span>
    }

    return (
      <>
        <div className='grid grid-cols-6'>
          <div className="flex flex-col items-center col-span-2 p-4 w-full">
            <div>
              <h2 className="font-game px-4 py-2 border-black border-2 bg-white opacity-90 rounded-lg shadow-lg text-xl text-slate-800 font-bold uppercase">
                {player.name}
              </h2>
            </div>
            <div>
              {displayAvatar()}
            </div>
          </div>
          <div className='flex justify-end lg:justify-center items-center col-span-4'>
            <ChoiceVue choice={payload => choice(payload)} player={player}/>
          </div>
        </div>
      </>
    )
  }
