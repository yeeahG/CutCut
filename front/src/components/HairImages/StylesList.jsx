import React from 'react'

const StylesList = (props) => {
  return (
    <div>
        <img className='image' src={props.image} />
        <div>
            <div className='imageName'>
                {props.name}
            </div>
        </div>
    </div>
  )
}

export default StylesList