import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Modal } from "./components/Modal"
import { useState } from "react"

function App() {

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
      <Footer onModalOpen={handleModalOpen}/>

    </>
  )
}

export default App



