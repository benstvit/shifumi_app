import {useState, useEffect} from 'react'

type BotProps = {
  bot: {
    frontUrl: String
  }
}

export default function BotVue ({bot}: BotProps) {

  useEffect(() => {
    console.log(bot);
  })

  function displayAvatar() {
    return <span>
        <img className="avatar-selector avatar-default h-48 w-48" src={bot.frontUrl} alt="bot-avatar" />
      </span>
  }

    return (
      <>
        <div>
          {displayAvatar()}
        </div>
      </>
    )
  }
