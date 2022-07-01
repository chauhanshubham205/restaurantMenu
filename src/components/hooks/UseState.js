import React, { useEffect, useReducer } from 'react'
import "./UseState.css";

const reducer = (state,action)=>{
      if(action.type==="Incr"){
        state = state+1
      }
      if(state>0 &&  action.type==="Decr"){
        state = state-1
      }
      if(action.type==="ReSet"){
        state = state-state
      }
      
      return state
}

const UseState = () => {
  const initialData = 10
    const[state,dispatch]=useReducer(reducer,initialData)
    useEffect(()=>{
        document.title=`ReactJS num(${state})`
    })
  return (
    <>
      <div className='num'>{state}</div>
      <div className='box'>
        <div className='box1' onClick={()=>dispatch({type:"Incr"})} >Incr</div>
        <div className='box1'onClick={()=>dispatch({type:"ReSet"})}>ReSet</div>
        <div className='box1'onClick={()=>dispatch({type:"Decr"})}>Decr</div>
      </div>
    </>
  )
}

export default UseState
