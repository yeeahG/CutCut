import React from 'react'

const User = (props) => {
  console.log(props);

  return (
    <div>
      User
      login 기능으로 할지 연락처 기입하는 페이지로 할지
      {props.name}
    </div>
  )
}

export default User