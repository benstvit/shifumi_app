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

  function setPlayer(payload) {
    setPlayerState({player: {...payload}})
  }

  return (
    <>
      <Banner />
      <SetPlayer
        submit={(payload) => setPlayer(payload)} />
      <Arena />
    </>
  )

}
