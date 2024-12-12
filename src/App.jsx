import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Modal } from "./components/Modal"
import { Play } from "./components/Play"
import { Game } from "./components/Game"
import { useState } from "react"

function App() {
  const [playGame, setPlayGame] = useState(true)

  const handlePlayGame = () => {
    setPlayGame(false)
    setTryAgain(true)
  }


  const [tryAgain, setTryAgain] = useState(true)

  const handleTryAgain = () => {
    setTryAgain(false)
    setPlayGame(true)
  }


  const [openModal, setOpenModal] = useState(false)

  const handleModalOpen = () => {
    setOpenModal(true)
  }

  const handleModalClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Modal isOpen={openModal} onModalClose={handleModalClose}/>
      <Header />
      <Play isOpen={playGame} onPlayGame={handlePlayGame}/>
      <Game isOpen={tryAgain} onTryAgain={handleTryAgain}/>
      <Footer onModalOpen={handleModalOpen}/>

    </>
  )
}

export default App



