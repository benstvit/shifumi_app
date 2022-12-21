import {useState} from 'react'
import Arena from './containers/Arena';
import SetGame from './components/SetGame/SetGame';
interface GameState {
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
}

export default function App() {
  const state: GameState = {
    player: {
      name: '',
      frontUrl: '',
      backUrl: '',
      hasPlayed: false,
      action: ''
    },
    bot: {
      frontUrl: '',
      action: ''
    }
  }

  const [GameState, setGameState] = useState<GameState>(state)

  const actualPlayerState = {...GameState.player }
  const actualBotState = {...GameState.bot};

  const displaySetPlayer = () => {
    return !GameState.player.name || !GameState.player.frontUrl;
  }

  const displayArena = () => {
    return GameState.player.backUrl !== '' && GameState.bot.frontUrl !== '';
  }

  function resetChoices() {
    const newState = {...GameState, player: {...actualPlayerState, action: ''}, bot: {...actualBotState, action: ''}};
    setGameState(newState)
  }

  function resetGame() {
    const newState = {player: {name:'', frontUrl:'', backUrl:'', hasPlayed: false, action: ''}, bot: {frontUrl: '', action: ''}};
    setGameState(newState);
  }

  function setChoices(payload) {
    const newState = { ...GameState, player: { ...actualPlayerState, hasPlayed: true, action: payload.player.action }, bot: {...actualBotState, action: payload.bot.action} };
    setGameState(newState)
    setTimeout(() => {
      resetChoices();
    }, 2600);
  }

  function setPlayer(payload, type) {
    const newState = type === 'name' ? { ...GameState, player: { ...actualPlayerState, name: payload} } : { ...GameState, player: { ...actualPlayerState, frontUrl: payload.player.frontUrl, backUrl: payload.player.backUrl}, bot: {...actualBotState, frontUrl: payload.bot.frontUrl} } ;
    setGameState(newState)
  }

  return (
    <>
      {displaySetPlayer() && <SetGame
        submitName={(payload) => setPlayer(payload, 'name')}
        submitUrl={(payload) => setPlayer(payload, 'avatar')}
        gameState={GameState} />}

      <div className="flex flex-col lg:flex-row justify-between items-center">
        {displayArena() && <Arena gameState={GameState} setChoices={(payload) => setChoices(payload)} />}

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
