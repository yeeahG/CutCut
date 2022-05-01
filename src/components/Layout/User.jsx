import React from 'react'

const User = (props) => {
  //console.log(props);
  let localStorage = window.localStorage;

  return (
    <div>
      User
      login 기능으로 할지 연락처 기입하는 페이지로 할지<br/>
      {localStorage.getItem("choice")}<br/>
      {localStorage.getItem("hairName")}<br/>
      {localStorage.getItem("hairPrice")}<br/>
      {localStorage.getItem("hariDesigner")}<br/>
    </div>
  )
}

export default User