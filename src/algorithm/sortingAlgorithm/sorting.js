import React, { useEffect, useRef, useState } from "react";
import Sketch from "react-p5";
import './sorting.css';
const BubbleSort = () => {
  let values = [];
  let sort = false;
  let i = 0;
  let gap=0;
  let sliderValue=15;
  const ref = useRef(null);
  let width=0;
  let height=0;
  let lengthofArray=14;
  let size=0;
  function setup(p5, parentRef) {
     width = ref.current.clientWidth;
     height = ref.current.clientHeight;
    size=width/lengthofArray;
    p5.createCanvas(width, height).parent(parentRef);
    gap=width-lengthofArray*size;
    gap=gap/2;
    for (let x = 0; x < lengthofArray; x++) {
      values.push(Math.floor(Math.random() * height-10)+5);
    }
  }
  function draw(p5) {
    p5.frameRate(sliderValue/2);
    p5.background(220);
    if(sort){
      bubbleSort(p5);
    }
    else{
      simulateSorting(p5, values.length, values.length);
    }
  }

  function bubbleSort(p5) {
    if (i < values.length - 1) {
      let x = i;
      for (let j = i + 1; j < values.length; j++) {
        if (values[x] > values[j]) {
          x = j;
        }
      }
      simulateSorting(p5, i, x);
      let temp = values[i];
      values[i] = values[x];
      values[x] = temp;
      i++;
    } else {
      simulateSorting(p5, values.length, values.length);
      // p5.noLoop();
    }
  }

  function simulateSorting(p5, x, y) {
    for (let i = 0; i < values.length; i++) {
      p5.stroke(100, 143, 143);
      p5.fill(50);
      p5.rect(i * size+gap, p5.height - values[i], size, values[i]);
    }
    if (x < values.length && y < values.length) {
      if (x === y) {
        p5.fill(255, 0, 255);
        p5.rect(x * size+gap, p5.height - values[x],size, values[x]);
      }
   else {
      p5.fill(0, 200, 255);
      p5.rect(x * size+gap, p5.height - values[x], size, values[x]);
      p5.fill(255,0, 0);
      p5.rect(y * size+gap, p5.height - values[y], size, values[y]);
    }
  }
}

  const resetHandler = () => {
    size=width/lengthofArray;
    gap=width-lengthofArray*size;
    gap=gap/2;
    i = 0;
    values = [];
    for (let x = 0; x < lengthofArray; x++) {
      values.push(Math.floor(Math.random() * height-10)+5);
    }
    sort=false;
  }  
  const lengthChangeHandler=(e)=>{
    lengthofArray=e.target.value;
    resetHandler();
  }
  return(
    <div ref={ref} className='__sorting'>
      <Sketch setup={setup} draw={draw} />
      <button onClick={()=>sort=true}>start</button> 
      <button onClick={resetHandler}>reset</button> 
      <button onClick={()=>sort=false}>stop</button> 
      <input type="range" min="2" max="30" step="1" defaultValue={sliderValue}
      onChange={(e)=>{sliderValue=e.target.value}}/>
      <input type="range" min="10" max="60" step="1" defaultValue={lengthofArray}
      onChange={(e)=>{lengthChangeHandler(e)}}/>

    </div>
  ) 
};
export default BubbleSort;
