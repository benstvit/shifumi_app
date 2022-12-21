import BotVue from '../components/BotVue/BotVue'
import PlayerVue from '../components/PlayerVue/PlayerVue'

type ArenaProps = {
  gameState: {
    player: {
      name: string,
      frontUrl: string,
      backUrl: string,
      hasPlayed: Boolean,
      action: string
    },
    bot: {
      frontUrl: string,
      action: string
    }
  },
  setChoices: Function,
}

export default function Arena({gameState, setChoices }: ArenaProps) {

    const botChoice = () => {
      let randomIndex = Math.floor(Math.random() * 3);
      return ['rock', 'paper', 'scissors'][randomIndex];
    }

    function setChoice(payload) {
      gameState.player.action = payload;
      gameState.bot.action = botChoice();
      setChoices(gameState);
    }

    return (
      <>
        <div className="mx-auto w-full my-0 lg:w-2/3 lg:my-2 rounded-lg shadow-lg bg-white h-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between m-4 bg-gradient-to-l from-red-300 to-red-50 h-1/2">
            {gameState.bot &&<BotVue gameState={gameState} />}
          </div>
          <div className="flex items-center justify-center lg:items-start m-4 bg-gradient-to-r from-blue-300 to-blue-50 h-1/2">
            <PlayerVue
              player={gameState.player}
              choice={(payload) => setChoice(payload)} />
          </div>
        </div>
      </>
    )
  }
