import {useEffect, useState} from 'react'
import Arena from './containers/Arena';
import Banner from './components/shared/Banner';
import SetPlayer from './components/SetPlayer/SetPlayer';


interface PlayerState {
  player: {
    name: String,
    url: String
  }
}

export default function App() {
  const player: PlayerState = {
    player: {
      name: '',
      url: ''
    }
  }

  const [playerState, setPlayerState] = useState<PlayerState>(player)

  function setPlayerName(payload) {
    console.log(payload);
    setPlayerState({player: {...player.player, name:payload}})
  }
  function setPlayerAvatar(payload) {
    setPlayerState({player: {...player.player, url: payload}})
  }

  return (
    <>
      <Banner />
      <SetPlayer
        submitName={(payload) => setPlayerName(payload)}
        submitUrl={(payload) => setPlayerAvatar(payload)}
        playerState={playerState} />
      <Arena />
    </>
  )

}
