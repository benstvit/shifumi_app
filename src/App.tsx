import {useEffect, useState} from 'react'
import Arena from './containers/Arena';
import Banner from './components/shared/Banner';
import SetGame from './components/SetPlayer/SetGame';


interface GameState {
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
}

export default function App() {
  const state: GameState = {
    player: {
      name: '',
      frontUrl: '',
      backUrl: '',
      hasPlayed: false,
      choice: ''
    },
    bot: {
      frontUrl: '',
      choice: ''
    }
  }

  const [GameState, setGameState] = useState<GameState>(state)

  const displaySetPlayer = () => {
    return !GameState.player.name || !GameState.player.frontUrl;
  }

  const displayArena = () => {
    return GameState.player.backUrl !== '' && GameState.bot.frontUrl !== '';
  }

  function setChoices(payload) {
    const actualPlayerState = {...GameState.player }
    const actualBotState = {...GameState.bot};
    const newState = { ...GameState, player: { ...actualPlayerState, hasPlayed: true, choice: payload.player.choice }, bot: {...actualBotState, choice: payload.bot.choice} };
    setGameState(newState)
  }

  function setPlayer(payload, type) {
    const actualPlayerState = {...GameState.player }
    const actualBotState = {...GameState.bot};
    const newState = type === 'name' ? { ...GameState, player: { ...actualPlayerState, name: payload} } : { ...GameState, player: { ...actualPlayerState, frontUrl: payload.player.frontUrl, backUrl: payload.player.backUrl}, bot: {...actualBotState, frontUrl: payload.bot.frontUrl} } ;
    setGameState(newState)
  }

  if (displaySetPlayer()) {
    return (
      <>
        {displaySetPlayer() && <SetGame
          submitName={(payload) => setPlayer(payload, 'name')}
          submitUrl={(payload) => setPlayer(payload, 'avatar')}
          gameState={GameState} />}
      </>
    )
  } else {
    return (
      <>
        <div className="flex justify-center items-center">
          {displayArena() && <Arena
                                gameState={GameState}
                                setChoices={(payload) => setChoices(payload)} />}
        </div>
      </>
    )
  }

}
