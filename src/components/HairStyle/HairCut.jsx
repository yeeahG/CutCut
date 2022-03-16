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
      <button type='submit' onClick={openModal}>
        선택
      </button>
      <div className='styleText'>
        <div className='hairName'><h1>{props.name}</h1></div>
        <div className='hairPrice'>{props.price}</div>
      </div>

        <div>
          <Modal open={modalOpen} close={closeModal} header={props.name}>
            <img className="hairImage" src={props.image}/>
            <button >선택완료</button>
            <button >닫기</button>
         </Modal>
         </div>
    </div>

    
  )
}

export default HairCut