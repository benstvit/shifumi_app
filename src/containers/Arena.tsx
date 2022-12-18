import {useState, useEffect} from 'react'
import BotVue from '../components/BotVue/BotVue'
import PlayerVue from '../components/PlayerVue/PlayerVue'

type ArenaProps = {
  gameState: {
    player: {
      name: String,
      frontUrl: String,
      backUrl: String
    },
    bot: {
      frontUrl: String
    }
  }
}


export default function Arena({gameState}: ArenaProps) {

  useEffect(() => {
    console.log(gameState)
  })

    return (
      <>
        <div className="place-content-center w-2/3 h-full rounded-lg shadow-lg bg-gray-50">
          <div className="flex items-end justify-end m-4 bg-pink-200">
            {gameState.bot &&<BotVue bot={gameState.bot} />}
          </div>
          <div className="flex items-start m-4 bg-blue-200">
            <PlayerVue  player={gameState.player} />
          </div>
        </div>

      </>
    )
  }
