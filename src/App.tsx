import {useEffect, useState} from 'react'
import Arena from './containers/Arena';
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
  function resetChoices() {
    const actualPlayerState = {...GameState.player }
    const actualBotState = {...GameState.bot};
    const newState = {...GameState, player: {...actualPlayerState, choice: ''}, bot: {...actualBotState, choice: ''}};
    setGameState(newState)
  }

  function resetGame() {
    const newState = {player: {name:'', frontUrl:'', backUrl:'', hasPlayed: false, choice: ''}, bot: {frontUrl: '', choice: ''}};
    setGameState(newState);
  }

  function setChoices(payload) {
    const actualPlayerState = {...GameState.player }
    const actualBotState = {...GameState.bot};
    const newState = { ...GameState, player: { ...actualPlayerState, hasPlayed: true, choice: payload.player.choice }, bot: {...actualBotState, choice: payload.bot.choice} };
    setGameState(newState)
    setTimeout(() => {
      resetChoices();
    }, 2500);
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
        <div className="flex justify-between items-center">
          {displayArena() && <Arena
                                gameState={GameState}
                                setChoices={(payload) => setChoices(payload)} />}
          <div className='mx-auto'>
            {GameState.player.backUrl && GameState.bot.frontUrl &&
              <button
                className='uppercase bg-black text-white opacity-90 border-black border-2 rounded-md font-game hover:scale-150 hover:bg-white hover:text-black m-4 px-4 py-2'
                onClick={resetGame}>
                Reset Game
              </button>}
          </div>
        </div>
      </>
    )
  }

}
