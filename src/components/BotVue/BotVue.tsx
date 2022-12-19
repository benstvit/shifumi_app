import {useState, useEffect} from 'react'

type BotProps = {
  gameState: {
    player: {
      hasPlayed: Boolean,
      choice: string
    },
    bot: {
      frontUrl: string,
      choice: string
    },
  }
}

export default function BotVue ({gameState}: BotProps) {

  const botChoice = gameState.bot.choice;
  const playerChoice = gameState.player.choice;

  const gameEnd = () => {
    return gameState.player.hasPlayed && gameState.player.choice !== "" && gameState.bot.choice !== "";
  }

  const displayEvents = () => {
    if (!gameState.player.hasPlayed) return "Players are preparing their move...";
    console.log(gameState);
    if (gameEnd()) {
      switch (playerChoice) {
        case "rock":
          return botChoice === "paper" ? "Shifumi Master wrapped the game! You lose!" : "Shifumi Master needs a new pair of scissors! You win!";
          break;
        case "paper":
          return botChoice === "scissors" ? "Shifumi Master chopped your paper sheet off! You lose!" : "You wraped up the game with success! You win!"
          break;
        default:
          return botChoice === "rock" ? "Looks like Shifumi Master does not like scissors! You lose" : "This was a sharp move! You win!"
          break;
      }
    }
  }

  const emoticon = () => {
    console.log(gameEnd())
    // if (gameState.player.hasPlayed && gameState.bot.choice)
    // if (index === 0) return '✊';

    // return index === 1 ? '✋' : '✌️';
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
       <div className="flex flex-col items-center p-4">
          <div>
            <h2 className="font-game px-4 py-2 bg-blue-400 rounded-md shadow-lg text-xl text-white font-bold uppercase">
              Shifumi Master
            </h2>
          </div>
          <div>
              {displayAvatar()}
          </div>
          <p>{emoticon()}</p>
        </div>
      </>
    )
  }
