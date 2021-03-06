import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Modal from 'react-modal'
import LoginModal from './LoginModal'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10,11,13,0.75)',
  },
}
Modal.setAppElement('#__next')
const ModalBox = ({ ModalOpen }) => {
  const router = useRouter()
  return (
    <div>
      <Modal
        isOpen={ModalOpen}
        contentLabel="Example Modal"
        style={customStyles}
        onRequestClose={() => {
          router.push('/')
        }}
      >
        <LoginModal />
      </Modal>
    </div>
  )
}

export default ModalBox
