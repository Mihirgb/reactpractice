import React from "react"

const Scientist = ({scientist}) => {
  return (
    <div>
        <h1>{scientist.name} </h1>
        <img src={scientist.imageURL} alt="" />
        <h2>{scientist.profession} </h2>
        <h2>{scientist.awards} </h2>
        <h2>{scientist.discovered} </h2>
    </div>
  )
}

export default Scientist