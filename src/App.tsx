import React, {Component} from 'react'
import Arena from './containers/Arena';
import SetPlayer from './components/SetPlayer/SetPlayer';

type Player = {
  player: {
    name: String,
    url: String
  }
}

export default class App extends Component<{}, Player> {
  state: Player = {
    player: {
      name: '',
      url: ''
    }
  }

  setPlayer(payload ) {
    console.log(payload);
  }

  render() {
    return (
      <>
        <SetPlayer submit={(payload) => this.setPlayer.bind(this, payload)} />
        <Arena />
      </>
    )
  }
}
