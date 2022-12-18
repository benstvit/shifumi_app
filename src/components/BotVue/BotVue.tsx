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
        <img className="h-60 w-60 p-8" src={bot.frontUrl} alt="bot-avatar" />
      </span>
  }

    return (
      <>
       <div className="flex flex-col items-center p-4">
          <div>
            <h2 className="font-game px-4 py-2 bg-blue-500 rounded-md shadow-lg text-2xl text-black opacity-80 font-bold uppercase">
              Shifumi Master
            </h2>
          </div>
          <div>
              {displayAvatar()}
          </div>
        </div>
      </>
    )
  }
