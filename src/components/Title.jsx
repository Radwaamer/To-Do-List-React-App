import React from 'react'

const Title = ({data}) => {
  return (
    <div className="title">
        <h1>To-Do-List <span>({data})</span></h1>
    </div>
  )
}

export default Title