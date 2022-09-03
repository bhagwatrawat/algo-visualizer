import React, { useEffect, useRef, useState } from "react";
import Sketch from "react-p5";

const BubbleSort = () => {
  let values =[];
  let i = 0;
//   let j = 0;
  const ref = useRef(null);
  
  // The statements in the setup() function
  // execute once when the program begins
  // The array is filled with random values in setup() function.
  function setup(p5, parentRef) {
    let width = ref.current.clientWidth;
    let height = ref.current.clientHeight;
   
    p5.createCanvas(600, 600).parent(parentRef);
    p5.frameRate(1)
    for(let x = 0;x<600/20;x++){
        values.push(Math.floor(Math.random()*600+5));
        console.log('k');
      }
    console.log('h')
    
  }

  // The statements in draw() function are executed until the
  // program is stopped. Each statement is executed in
  // sequence and after the last line is read, the first
  // line is executed again.
  function draw(p5) {
    p5.background(220);
    bubbleSort(p5);
    simulateSorting(p5);
  }

  // The bubbleSort() function sorts taking 8 elements of the array
  // per frame. The algorithm behind this function is
  // bubble sort.
  function bubbleSort(p5) {
      if (i < values.length-1) {
        let x=i;
        for(let j=i+1;j<values.length;j++){
            if(values[x]>values[j]){
                x=j;
            }
        }
        let temp=values[i];
        values[i]=values[x];
        values[x]=temp;
        i++;
        simulateSorting(p5);
      } 
      else {
        p5.noLoop();
      }
      
  }

  // The simulateSorting() function helps in animating
  // the whole bubble sort algorithm
  // by drawing the rectangles using values
  // in the array as the length of the rectangle.
  function simulateSorting(p5) {
    for (let i = 0; i < values.length; i++) {
      p5.stroke(100, 143, 143);
      p5.fill(50);
      p5.rect(i*20, p5.height-values[i],20, values[i]);
    }
  }
  console.log(Sketch);
  return <Sketch ref={ref} setup={setup} draw={draw} />;
};
export default BubbleSort;
