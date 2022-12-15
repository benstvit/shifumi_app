import React, {Component} from 'react'


export default class SetPlayer extends Component<{ submit: any}>  {
  render () {
    return (
      <>
        <button
          className="bg-pink-100 p-4 m-2 rounded-full hover:cursor-pointer"
          onClick={this.props.submit('Test')}>
            Submit choice
        </button>
      </>
    )
  }
}
