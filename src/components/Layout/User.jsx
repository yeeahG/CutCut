import React from 'react'

const User = (props) => {
  //console.log(props);
  let localStorage = window.localStorage;

  return (
    <div>
      User
      login 기능으로 할지 연락처 기입하는 페이지로 할지<br/>
      아니면 로그인 or 비회원 (전화번호, 이름)기입 후 예약내역 불러오기 할지<br/><br/>
      <div>
        {localStorage.getItem("choice")}<br/>
        {localStorage.getItem("hairName")}<br/>
        {localStorage.getItem("hairPrice")}<br/>
        {localStorage.getItem("hariDesigner")}<br/>
      </div>
      <button>확인</button>
      <button>취소</button>
    </div>
  )
}

export default User