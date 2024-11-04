// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { appContainer, buttons, board } from './App.css'

function App() {

  return (
      <div className={appContainer}>
        <div className={board}>

        </div>

        <div className={buttons}>
          <button>
            이 게시판 삭제하기
          </button>
        </div>
      </div>
  )
}

export default App
