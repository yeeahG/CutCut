import React, { useContext, useState } from 'react';
import HairContext from '../Store/HairContext';
import Modal from '../Modal/Modal'
import './HairCut.css'
import Calender from '../Layout/Calender';

const designers =[
  {key:1, value:"1번 디자이너"},
  {key:2, value:"2번 디자이너"},
  {key:3, value:"3번 디자이너"},
]

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

  const choiceClick = () => {
    setModalOpen(true);
    console.log(props.name);
    localStorage.setItem("hairName", props.name)
    localStorage.setItem("hairPrice", props.price)
    localStorage.setItem("hariDesigner", props.designer)

    const choiceData = {
      name : localStorage.getItem("hairName"),
      price : localStorage.getItem("hairPrice"),
      designer : localStorage.getItem("hariDesigner"),
    }

    localStorage.setItem("choice", JSON.stringify(choiceData));
  }

  // const [selected, setSelected] = useState("");

  // const designerHandler = (e) => {
  //   setSelected(e.target.value);
  //   localStorage.setItem("designerS", setSelected);
  //   console.log(setSelected);
  // }

  // console.log(props.name);
  //console.log(startDate.toLocaleString());
  //console.log(Options[0]);


  const [Content, setContent] = useState();

  const designerChoiceHandler=(e)=>{
    setContent(e.currentTarget.value)
    // localStorage.setItem("designerS", Content);
  }

  console.log(Content);
  // console.log(designerS);

  return (
    <div className='hairContent'>
      <img className="hairImage" src={props.image}/>
      <div className='styleText'>
        <div className='hairName'><h1>{props.name}</h1></div>
        <div className='hairPrice'>{props.price}</div>
        <div className='hairDesigner'>{props.designer}</div>
      </div>
      {/* <button type='submit' onClick={openModal}> */}
      <button type='submit' onClick={choiceClick}>
        선택
      </button>

      <div className='reservContent'>
        <Modal open={modalOpen} close={closeModal}> {/*header="예약을 진행해주세요"*/}
          <img className="hairImage" src={props.image}/>
          <div className='hairReserv'>
            {/* <h4>선택내역</h4>
            {props.name} {props.price}￦ {props.designer}디자이너 */}

            <h4>원하는 디자이너를 선택해주세요</h4>
            {/* <select className='designer_choice' onChange={designerHandler} value={selected}>
              <option value="">click</option>
              <option value="yeri_des">yeri 디자이너</option>
              <option value="sep_des">september 디자이너</option>
              <option value="kim_des">kim 디자이너</option>
            </select> */}


            <select onChange={designerChoiceHandler} value={Content}>
              {designers.map((item)=>(
                <option key={item.key} value={item.value}>{item.value}</option>
              ))}
            </select>

            <Calender />
          </div>
          {/* 연락처 : <input type="text"/> */}
        </Modal>
      </div>
    </div>
  )

}

export default HairCut