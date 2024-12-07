import React, {useState} from 'react'

function Counter(){
    const [num, setNum] = useState(0);
    return (
        <>
            <div className='num'>{num}</div>
            <div className="cont">
                <button onClick={() => setNum(num-1)}>Decrement</button>
                <button onClick={() => setNum(0)}>Reset</button>
                <button onClick={() => setNum(num+1)}>Increment</button>
            </div>
        </>
  )
}

export default Counter