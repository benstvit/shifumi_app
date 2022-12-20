type BotProps = {
  gameState: {
    player: {
      hasPlayed: Boolean,
      action: string
    },
    bot: {
      frontUrl: string,
      action: string
    },
  }
}

export default function BotVue ({gameState}: BotProps) {

    const botChoice = gameState.bot.action;
    const playerChoice = gameState.player.action;

    const displayEvents = () => {
      if (!gameState.player.hasPlayed) return "Players are preparing their move...";
      if (botChoice === playerChoice) return "It's a tie! Play again"

      if (gameEnd()) {
        switch (playerChoice) {
          case "rock":
            return botChoice === "paper" ? "Shifumi Master wrapped the game with paper! You lose!" : "Shifumi Master needs a new pair of scissors! You win!";
          case "paper":
            return botChoice === "scissors" ? "Shifumi Master chopped your paper sheet off! You lose!" : "You wrapped up the game with success! You win!"
          default:
            return botChoice === "rock" ? "Looks like Shifumi Master has a grudge against scissors! You lose" : "This was a sharp move! You win!"
        }
      }
    }

    const emoticon = () => {
      if (!gameEnd()) return null;

      return botChoice === 'rock' ? '✊' : (botChoice === 'paper' ? '✋' : '✌️');
    }

    const gameEnd = () => {
      return gameState.player.hasPlayed && gameState.player.action !== "" && gameState.bot.action !== "";
    }

    function displayAvatar() {
      return <span>
          <img className="h-60 w-60 p-8" src={gameState.bot.frontUrl} alt="bot-avatar" />
        </span>
    }

    return (
      <>
        <div className='items-start justify-start bg-white opacity-90 border-black border-2 rounded-md font-game w-1/3 m-4 px-4 py-2'>
          {displayEvents()}
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <div>
            <h2 className="font-game px-4 py-2 bg-white rounded-md shadow-lg text-xl text-slate-800 font-bold uppercase">
              Shifumi Master
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div className={`flex items-center justify-center ${emoticon() ? 'visible' : 'invisible'} bg-white border-gray-800 shadow-md border-2 w-24 h-24 rounded-full`}>
              <h1 className='text-4xl'>
                {emoticon()}
              </h1>
            </div>
            {displayAvatar()}
          </div>
        </div>
      </>
    )
  }
