import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from 'mathjs'

const calcSlice =createSlice({
    name:"calc",
    initialState:{
        input: '',
        result: '' 
    },
    reducers:{
        setInput: (state, action) => {
            state.input += action.payload;
          },
        calculateResult:(state)=>{
          console.log('vilichooo');
            try {
                const result = evaluate(state.input);
                console.log(typeof result);
                state.result = result.toString();
                console.log(state.result);
              } catch (error) {
                state.result = 'Error';
              }
           
        },
        clearInput: (state) => {
            state.input = '';
            state.result = '';
          }
    }
})


export const { setInput, calculateResult, clearInput } = calcSlice.actions;
export const input =(state)=>state.calc.input
export const result =(state)=>state.calc.result

export default calcSlice.reducer;