import React, {Component} from 'react'

interface ArenaState {
}

export default class Welcome extends Component<{}, ArenaState> {
  state = {}

  render () {
    return (
      <>
        <h1>🚧 The Battle Will Take Place Here 🚧</h1>
      </>
    )
  }
}
