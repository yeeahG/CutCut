import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import './Reservation.css'


const Reservation = (props) => {  

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
  

  // const hairContext = useContext(HairContext);
  // console.log(hairContext);


  const reservationModalContent=(
    <>
    {/* 예약날짜 */}

    {/* 원하는 직원 */}

    {/* 예약내역 (스타일, 총가격) */}
    
    </>
  )
    

  return (
    <div className='reserveContent'>
      <Modal open={modalOpen} close={closeModal} header="예약정보">
        <button >선택완료</button>
        <button onClick={props.close}>닫기</button>
      </Modal>
    </div>

  )
}

export default Reservation