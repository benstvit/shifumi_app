import {useState, useEffect} from 'react'
import ChoiceVue from './ChoiceVue'

type PlayerProps = {
  player: {
    name: string,
    frontUrl: string,
    backUrl: string,
    hasPlayed: Boolean,
    choice: string
  },
  choice: Function,
}

export default function PlayerVue ({player, choice}: PlayerProps) {

  function displayAvatar() {
    return <span>
        <img className="h-60 w-60" src={player.backUrl} alt="player-avatar" />
      </span>
  }

  function setChoice(payload) {
    choice(payload);
  }

    return (
      <>
        <div className='grid grid-cols-6'>
          <div className="flex flex-col items-center col-span-2 p-4">
            <div>
              <h2 className="font-game px-4 py-2 border-black border-2 bg-white opacity-90 rounded-lg shadow-lg text-xl text-slate-800 font-bold uppercase">
                {player.name}
              </h2>
            </div>
            <div>
                {displayAvatar()}
            </div>
          </div>
          <div className='flex justify-center items-center col-span-4'>
            <ChoiceVue choice={payload => setChoice(payload)}/>
          </div>
        </div>
      </>
    )
  }
