import React, { useState, useEffect} from 'react'
import './User.css'

const RESERVE = [
  {
    name: localStorage.getItem("hairName"),
    price: localStorage.getItem("hairPrice"),
    designer: localStorage.getItem("hariDesigner"),
    phoneNumber: localStorage.getItem("userNumber"),
  }
]

console.log(RESERVE[0].phoneNumber);


const BASE_URL = 'http://localhost:8090/reservation';

const User = (props) => {
  //console.log(props);
  let localStorage = window.localStorage;
  const [reserve, setReserve] = useState(RESERVE);
  const [phoneNumber, setPhoneNumber]=useState();

  
  const phoneData = () => {
    let text = document.getElementById('user-number').value;
    setPhoneNumber(localStorage.setItem("userNumber", text));
    setPhoneNumber(text);
  }

  const reserveHandler = async () => {
    // console.log('예약', userData);

    //post 처리
    const data = {
      name: localStorage.getItem("hairName"),
      price: localStorage.getItem("hairPrice"),
      designer: localStorage.getItem("hariDesigner"),
      phoneNumber: localStorage.getItem("userNumber"),
    }

    //console.log(data);

    await fetch(BASE_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    setReserve();

    localStorage.setItem("choice","");
    console.log('DB입력');
  }


  return (
    <div className='user-content'>
      User<br/>
      login 기능으로 할지 연락처 기입하는 페이지로 할지<br/>
      아니면 로그인 or 비회원 (전화번호, 이름)기입 후 예약내역 불러오기 할지<br/><br/>
      <div className='choice-list'>
        {localStorage.getItem("choice")}<br/>
        {localStorage.getItem("hairName")}<br/>
        {localStorage.getItem("hairPrice")}<br/>
        {localStorage.getItem("hariDesigner")}<br/>
        {localStorage.getItem("userNumber")}<br/>
      </div>

      <input id='user-number' type="text" placeholder='Please enter your phoneNumber' onKeyUp={phoneData}/>
      <div>
        <button onClick={reserveHandler}>확인</button>
        <button>취소</button>
      </div>

    </div>
  )
}

export default User