import {useState} from 'react'

export default function ChoiceVue ({choice}: {choice: any}) {

  const choices = ['rock', 'paper', 'scissors'];

  function emoticon(index) {
    if (index === 0) return '✊';

    return index === 1 ? '✋' : '✌️';
  }

  function setChoice(payload) {
    choice(payload);
  }
    return (
      <>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full h-1/3 ml-12 lg:ml-24">
          {choices.map((choice, index) => {
            return (
              <div className='flex flex-col justify-center' key={index}>
                <h1 className="text-4xl hidden lg:block">
                  {emoticon(index)}
                </h1>
                <button
                  type="button"
                  onClick={payload => setChoice(choice)}
                  className='uppercase bg-white opacity-90 border-black border-2 rounded-md font-game hover:scale-150 hover:bg-blue-500 hover:text-white m-4 px-4 py-2'
                  data-id={index}>
                  {choice}
                </button>
              </div>
            )
          })}
        </div>
      </>
    )
  }
