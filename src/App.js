/*
 * For Tips and Advanced Usage read this Blog Post
 * https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91
 */
import React, { useEffect, useRef, useState } from 'react';
import Sketch from 'react-p5';
import './App.css';
const App = () => {
	let y = 0;
  // const[arr,setArr]=useState([50,20,60,30,51,80])
  let sort=null;
  let swap=null;
  let arr=[50,20,60,30,51,80];
  let color=[[50,238,144],[50,238,144],[50,238,144],[50,238,144],[50,238,144],[50,238,144]]
  const ref = useRef(null);
  
	const setup = (p5, parentRef) => {
    console.log(parentRef)
  let width=ref.current.clientWidth;
  let height=ref.current.clientHeight;
  
		p5.createCanvas(width, height).parent(parentRef);
	};

	const draw = (p5) => {
		p5.background(0);
    for(let i=0;i<arr.length;i++){
      // p5.fill(255, arr[i] * 1.3, 0);

      p5.fill(color[i][0],color[i][1],color[i][2]);
      p5.rect(i*20,p5.height-arr[i],20,arr[i]);
    }
		// p5.rect(y, 50, 50, 50); 
  }
 
	const sortHandler=()=>{
    
    for(let i=0;i<arr.length-1;i++){
      let x=i;
       sort=setTimeout(function(){
        for(let j=i+1;j<arr.length;j++){
          if(arr[x]>arr[j]){
            x=j;
          }
        }
        if(x===i){
          color[x]=[60,15,60]
        }
        else{
        color[i]=[0,0,255];
        color[x]=[255,0,0];
        }
        console.log(i,x);
         swap=setTimeout(function(){
       
          let temp=arr[i];
          arr[i]=arr[x];
          arr[x]=temp;
         
        color[i]=[50,238,144];
      color[x]=[50,238,144];
          
        },1000)
       
      
      
      },3000*i)
      

    }
  }
  const resetHandler=()=>{
    arr=[50,20,60,30,51,80];
    clearTimeout(swap);
    clearTimeout(sort);
  }
		return (
			<div className="App">
				<h1>react-p5</h1>
        <div ref={ref} className="__App-canvas">
				<Sketch setup={setup} draw={draw} />
        </div>
        <button onClick={sortHandler}>Sort</button>
        <button onClick={resetHandler}>reset</button>
			</div>
		);
	}

export default App;