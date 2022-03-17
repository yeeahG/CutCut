import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import './Reservation.css'


const Reservation = (props) => {  
  // const hairContext = useContext(HairContext);
  // console.log(hairContext);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const reservationModalContent=(
    <>
    {/* 예약날짜 */}

    {/* 원하는 직원 */}

    {/* 예약내역 (스타일, 총가격) */}
    
    </>
  )
    

  return (
    // <div className='reserveContent'>
      // <Modal>{reservationModalContent}</Modal>
    // </div>
    <Modal open={modalOpen} close={closeModal}>
    </Modal>

  )
}

export default Reservation