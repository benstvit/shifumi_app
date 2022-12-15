import React, {Component} from 'react'
import Arena from './containers/Arena';
import Banner from './components/shared/Banner';
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

  render() {
    return (
      <>
        <Banner />
        <SetPlayer
          submit={(payload) => this.setPlayer(payload)} />
        <Arena />
      </>
    )
  }
  setName(event) {
    const userInput = event.target.value
    this.setState(state => ({player: {...state.player, name: userInput }}))
  }
  setPlayer(payload ) {
    this.setState({player: {...payload}})
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<Player>, snapshot?: any): void {
    console.log(this.state);
  }
}
