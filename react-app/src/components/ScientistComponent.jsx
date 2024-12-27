import React from 'react'
import Scientist from './Scientist'

const ScientistComponent = () => {
    const scentist1={
        name:'Maria Curie',
        imageURL:'https://i.imgur.com/yXOvdOSs.jpg',
        profession:'Physicist and Chemist',
        awards:['Nobel Prize in Physics','Nobel Prize in Chemisty'],
        discovered:['Radium','Polonium']
    }
    const scientist2={
        name:'Albert Einstein',
        imageURL:'https://i.imgur.com/yXOvdOSs.jpg',
        profession:'Theoretical Physicist',
        awards:['Nobel Prize in Physics'],
        discovered:['Theory of Relativity','Photoelectric Effect']
    }
  return (
    <div>
        <Scientist scientist={scentist1}/>
        <Scientist scientist={scientist2}/>

    </div>
  )
}

export default ScientistComponent