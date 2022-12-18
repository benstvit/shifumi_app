import {useEffect, useState} from 'react'
import Arena from './containers/Arena';
import Banner from './components/shared/Banner';
import SetPlayer from './components/SetPlayer/SetPlayer';


interface GameState {
  player: {
    name: String,
    frontUrl: String,
    backUrl: String
  }
}

export default function App() {
  const state: GameState = {
    player: {
      name: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  const [GameState, setGameState] = useState<GameState>(state)

  const displaySetPlayer = () => {
    return !GameState.player.name || !GameState.player.frontUrl;
  }

  function setPlayer(payload, type) {
    const actualPlayerState = {...GameState.player }
    const newState = type === 'name' ? { ...GameState, player: { ...actualPlayerState, name: payload} } : { ...GameState, player: { ...actualPlayerState, frontUrl: payload} } ;
    console.log(newState);
    setGameState(newState)
  }

  if (displaySetPlayer()) {
    return (
      <>
        <Banner />
        {displaySetPlayer() && <SetPlayer
          submitName={(payload) => setPlayer(payload, 'name')}
          submitUrl={(payload) => setPlayer(payload, 'avatar')}
          gameState={GameState} />}
      </>
    )
  } else {
    return (
      <>
        <Arena />
      </>
    )
  }

}
