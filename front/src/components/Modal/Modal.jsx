import React, { useContext, useState } from 'react';
import HairContext from '../Store/HairContext';
import ReservationItem from '../Store/ReservationItem';
import './Modal.css';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open,close,header} = props;
  const hairContext = useContext(HairContext);

  // const hairItems = (
  //   <ul>
  //     {hairContext.items.map((hair) => (
  //       <ReservationItem
  //         key={hair.id}
  //         name={hair.name}
  //         price={hair.price}
  //         image={hair.image}
  //       />
  //     ))}
  //   </ul>
  // )


  // console.log(startDate.toLocaleString());
  //console.log(props.children);

  //localstorage로 사용
  // let localStorage = window.localStorage;

  // let dates = (dates) => {
  //   let day = dates.toLocalDateString();
  //   day = localStorage.setItem('날짜선택', day);
  // }

  const onReserve = (e) => {

  }

  // console.log(props.children[1]);

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>

          <header>
            {/* <p>예약을 진행해주세요</p> */}
            {props.header}
            <button className="close" onClick={props.close}>
               &times;
            </button>
          </header>

          <main>
            {props.children}
          </main>
          
          <footer>
            <button className="submit">
            {/* <button className="submit" onClick={onReserve}> */}
              <a href='/user'>예약하기</a>
            </button>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>

        </section>
      ) : null}
    </div>
  )
}

export default Modal