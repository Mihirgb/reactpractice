import React,{useState} from "react"
import SquareButton from "./SquareButton"
const Square = () => {
    const [xClick,setXClick]=useState(true)
    const [squares,setSquare]=useState(Array(9).fill(null))
    const handleClick=(i)=>{
        if(squares[i] || calcWinner(squares)){
            return;
        }
        const newsquares=squares.slice()
        if(xClick){
            newsquares[i]='X'
        }
        else{
            newsquares[i]='O'
        }
        setSquare(newsquares)
        setXClick(!xClick)
    }
    const calcWinner=(squares)=>{
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0;i<lines.length;i++){
            const [a,b,c]=lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a]
            }
        }
        return null
    }

    const winner=calcWinner(squares);
    let status;
    if(winner){
        status='Winner:'+winner
    }
    else{
        status='Next player:'+ (xClick?'X':'O')
    }

    return (
        <>
         <div className="status">{status}</div>
            <div>
                <SquareButton  value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <SquareButton  value={squares[1]} onSquareClick={() => handleClick(1)} />
                <SquareButton  value={squares[2]} onSquareClick={() => handleClick(2)}  />
            </div>

            <div>
                <SquareButton  value={squares[3]} onSquareClick={() => handleClick(3)}  />
                <SquareButton  value={squares[4]} onSquareClick={() => handleClick(4)} />
                <SquareButton  value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>

            <div>
                <SquareButton  value={squares[6]} onSquareClick={() => handleClick(6)}  />
                <SquareButton  value={squares[7]} onSquareClick={() => handleClick(7)}  />
                <SquareButton  value={squares[8]} onSquareClick={() => handleClick(8)}  />
            </div>
        </>


    )
}
export default Square