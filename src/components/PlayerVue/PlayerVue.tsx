import {useState, useEffect} from 'react'

type PlayerProps = {
  player: {
    name: String,
    frontUrl: String,
    backUrl: String
  }
}

export default function PlayerVue ({player}: PlayerProps) {

  useEffect(() => {
    console.log(player)
  })

    return (
      <>
      </>
    )
  }
