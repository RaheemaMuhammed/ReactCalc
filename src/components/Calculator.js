import React from 'react'
import './Calculator.css'
import { setInput, calculateResult, clearInput, input, result } from '../redux/calcSlice'
import { useDispatch, useSelector } from 'react-redux'


const Calculator = () => {
    const input =useSelector((state)=>state.calc.input)
    const result =useSelector((state)=>state.calc.result)
    const dispatch=useDispatch()
    const inputHandler = (e) => {
        dispatch(setInput(e.target.value))
      };
    
    const clearHandler=()=>{
        dispatch(clearInput()
        )
    }
    const claculateHandler=()=>{
       
        dispatch(calculateResult())
    }

  return (
    <div>  <table id="calcu">
    <tr>
        <td colspan="3"><input type="text" id="result" value={result ? result : input} readOnly/></td>
        <td><input type="button" value="c" onClick={clearHandler}  /> </td>
    </tr>
    <tr>
   
        <td><input type="button" value="1" onClick={inputHandler} /> </td>
        <td><input type="button" value="2" onClick={inputHandler} /> </td>
        <td><input type="button" value="3" onClick={inputHandler} /> </td>
        <td><input type="button" value="/" onClick={inputHandler} /> </td>
    </tr>
    <tr>
        <td><input type="button" value="4" onClick={inputHandler} /> </td>
        <td><input type="button" value="5" onClick={inputHandler} /> </td>
        <td><input type="button" value="6" onClick={inputHandler} /> </td>
        <td><input type="button" value="*" onClick={inputHandler} /> </td>
    </tr>
    <tr>
        <td><input type="button" value="7" onClick={inputHandler} /> </td>
        <td><input type="button" value="8" onClick={inputHandler} /> </td>
        <td><input type="button" value="9" onClick={inputHandler} /> </td>
        <td><input type="button" value="-" onClick={inputHandler} /> </td>
    </tr>
    <tr>
        <td><input type="button" value="0" onClick={inputHandler} /> </td>
        <td><input type="button" value="." onClick={inputHandler} /> </td>
        <td><input type="button" value="=" onClick={claculateHandler} /> </td>

        <td><input type="button" value="+" onClick={inputHandler} /> </td>
    </tr>
</table></div>
  )
}

export default Calculator