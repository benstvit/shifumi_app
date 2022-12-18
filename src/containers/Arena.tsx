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
        <div className="flex flex-col bg-gray-100">
          <div className="items-end justify-start">
            {gameState.bot &&<BotVue bot={gameState.bot} />}
          </div>
          <div className="items-start justify-end">
            <PlayerVue  player={gameState.player} />
          </div>
        </div>

      </>
    )
  }
