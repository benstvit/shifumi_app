import {useState, useEffect} from 'react'
import BotVue from '../components/BotVue/BotVue'
import PlayerVue from '../components/PlayerVue/PlayerVue'

type ArenaProps = {
  gameState: {
    player: {
      name: string,
      frontUrl: string,
      backUrl: string,
      hasPlayed: Boolean,
      choice: string
    },
    bot: {
      frontUrl: string,
      choice: string
    }
  },
  setChoices: any,
}


export default function Arena({gameState, setChoices }: ArenaProps) {

  useEffect(() => {
    console.log(gameState);
  })

  const botChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][randomIndex];
  }

  function setChoice(payload) {
    gameState.player.choice = payload;
    gameState.bot.choice = botChoice();
    setChoices(gameState);
  }

    return (
      <>
        <div className="place-content-center w-2/3 h-full rounded-lg shadow-lg bg-white">
          <div className="flex items-start justify-between m-4 bg-gradient-to-l from-red-300 to-red-50">
            {gameState.bot &&<BotVue gameState={gameState} />}
          </div>
          <div className="flex items-start m-4 bg-gradient-to-r from-blue-300 to-blue-50">
            <PlayerVue  player={gameState.player} choice={(payload) => setChoice(payload)} />
          </div>
        </div>

      </>
    )
  }
