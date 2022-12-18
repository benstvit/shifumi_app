import {useState, useEffect} from 'react'

type PlayerProps = {
  player: {
    name: String,
    frontUrl: String,
    backUrl: String
  }
}

export default function PlayerVue ({player}: PlayerProps) {

  useEffect(() => {
    console.log(player)
  })

  function displayAvatar() {
    return <span>
        <img className="h-60 w-60" src={player.backUrl} alt="player-avatar" />
      </span>
  }

    return (
      <>
        <div className="flex flex-col items-center p-8">
          <div>
            <h2 className="font-game px-4 py-2 bg-blue-500 rounded-md shadow-lg text-2xl text-black opacity-80 font-bold uppercase">{player.name}</h2>
          </div>
          <div>
              {displayAvatar()}
          </div>
        </div>
      </>
    )
  }
