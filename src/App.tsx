import {useEffect, useState} from 'react'
import Arena from './containers/Arena';
import Banner from './components/shared/Banner';
import SetGame from './components/SetPlayer/SetGame';


interface GameState {
  player: {
    name: String,
    frontUrl: String,
    backUrl: String
  },
  bot: {
    frontUrl: String
  }
}

export default function App() {
  const state: GameState = {
    player: {
      name: '',
      frontUrl: '',
      backUrl: ''
    },
    bot: {
      frontUrl: '',
    }
  }

  const [GameState, setGameState] = useState<GameState>(state)

  const displaySetPlayer = () => {
    return !GameState.player.name || !GameState.player.frontUrl;
  }

  const displayArena = () => {
    return GameState.player.backUrl !== '' && GameState.bot.frontUrl !== '';
  }

  function setBot(payload) {
    console.log(displayArena())
    const actualBotState = {...GameState.bot }
    const newState = { ...GameState, bot: { ...actualBotState, frontUrl: payload } }
    setGameState(newState)
    console.log(displayArena())
  }

  function setPlayer(payload, type) {
    const actualPlayerState = {...GameState.player }
    const newState = type === 'name' ? { ...GameState, player: { ...actualPlayerState, name: payload} } : { ...GameState, player: { ...actualPlayerState, frontUrl: payload.frontUrl, backUrl: payload.backUrl} } ;
    setGameState(newState)
  }

  if (displaySetPlayer()) {
    return (
      <>
        {displaySetPlayer() && <SetGame
          submitBot={(payload) => setBot(payload)}
          submitName={(payload) => setPlayer(payload, 'name')}
          submitUrl={(payload) => setPlayer(payload, 'avatar')}
          gameState={GameState} />}
      </>
    )
  } else {
    return (
      <>
        <div className="flex justify-center items-start h-screen bg-gray-100">
          {displayArena() && <Arena gameState={GameState} />}
        </div>
      </>
    )
  }

}
