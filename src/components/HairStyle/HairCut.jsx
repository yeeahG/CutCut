import React, { useContext, useState } from 'react';
import HairContext from '../Store/HairContext';
import Modal from '../Modal/Modal'
import './HairCut.css'


const HairCut = (props) => {
  const hairContext = useContext(HairContext);

  //modal창 열림
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='hairContent'>
      <img className="hairImage" src={props.image}/>
      <div className='styleText'>
        <div className='hairName'><h1>{props.name}</h1></div>
        <div className='hairPrice'>{props.price}</div>
        <div className='hairDesigner'>{props.designer}</div>
      </div>
      <button type='submit' onClick={openModal}>
        선택
      </button>

      <div className='reservContent'>
        <Modal open={modalOpen} close={closeModal} header="예약을 진행해주세요">
          <img className="hairImage" src={props.image}/>
          <div className='hairReserv'>
            <p>선택내역 : {props.name} {props.price}￦ {props.designer}디자이너 </p>
          </div>
          <p>날짜 : </p>
          {/* 연락처 : <input type="text"/> */}
        </Modal>
      </div>
    </div>
  )

}

export default HairCut