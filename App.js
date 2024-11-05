import React from "react";
import Counter from "./componenets/counter";
import Button from "./componenets/button";
import { useState } from "react";
import './style.css'

export default function App(){

  const [count, useCount] = useState(0)
  function prev(){
    useCount(count-1)
  }

  function next(){
    useCount(count+1)
  }

  function reset(){
    useCount(0)
  }

  return (
    <section className="center">
      <Counter number={count}/>
      <div id="buttons">
        <Button name="Decrement Button" handle={prev}/>
        <Button name="Increment Button" handle={next}/>
        <Button name="Reset" handle={reset}/>
      </div>
  </section>
  )
}