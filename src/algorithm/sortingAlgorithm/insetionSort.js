import Sketch from "react-p5";
import "./sorting.css";
const InsertionSort = () => {
  let values = [];
  let i = 1;
  let gap = 0;
  let size = 0;
  let sort = false;
  let width = 0;
  let height = 0;
  let sliderValue = 15;
  let lengthofArray = 14;
 
  function setup(p5, parentRef) {
    width = window.innerWidth*0.7;
    height = window.innerHeight*0.7;
    p5.createCanvas(width, height).parent(parentRef);
    let startBtn=p5.createButton('Start');
    let stopBtn=p5.createButton('Stop');
    let resetBtn=p5.createButton('Reset');
    let frameRateSlider=p5.createSlider(2, 30, 15, 1);
    let arraySizeSlider=p5.createSlider(10, 60, 15, 1);
    frameRateSlider.input(()=>{
      sliderValue=frameRateSlider.value();
    })
    arraySizeSlider.input(()=>{
      lengthofArray=arraySizeSlider.value();
      resetHandler();
      p5.redraw();
    })
    startBtn.mousePressed(()=>{
      sort=true;
      p5.loop();
    })
    stopBtn.mousePressed(()=>{
      sort=false;
      p5.noLoop();
    })
    resetBtn.mousePressed(()=>{
      resetHandler();
      p5.redraw();
    })
    resetHandler();
    p5.noLoop();
  }
  
  function draw(p5) {
    p5.frameRate(sliderValue / 2);
    p5.background(220);
    if (sort) {
      bubbleSort(p5);
    } else {
      simulateSorting(p5,lengthofArray,lengthofArray);
    }
  }

  function bubbleSort(p5) {
    if (i < lengthofArray) {
      let x = values[i];
      let j;
      for (j=i-1;j>=0 && values[j]>x; j--) {
          values[j+1]=values[j];
        }
        values[j+1]=x;
        simulateSorting(p5, i,j+1);
      i++;
    } else {
      simulateSorting(p5,lengthofArray, lengthofArray);
      p5.noLoop();
    }
  }

  function simulateSorting(p5, x,y) {
    for (let i = 0; i < values.length; i++) {
      p5.stroke(100, 143, 143);
      p5.fill(50);
      p5.rect(i * size + gap, p5.height - values[i], size, values[i]);
    }
    if (x < values.length && y < values.length) {
      if (x === y) {
        p5.fill(255, 0, 255);
        p5.rect(x * size + gap, p5.height - values[x], size, values[x]);
      } else {
        p5.fill(0, 200, 255);
        p5.rect(x * size + gap, p5.height - values[x], size, values[x]);
        p5.fill(255, 0, 0);
        p5.rect(y * size + gap, p5.height - values[y], size, values[y]);
      }
    }
  }

  function resetHandler(){
    size = (width / lengthofArray) * Math.min(1, (lengthofArray * 2.5) / 60);
    gap = width - lengthofArray * size;
    gap = gap / 2;
    i = 1;
    values = [];
    for (let x = 0; x < lengthofArray; x++) {
      values.push(Math.floor(Math.random() * (height - 10)) + 10);
    }
    sort = false;
  };
  return (
    // <div ref={ref} className="__sorting">
      <Sketch setup={setup} draw={draw} />
    // </div>
  );
};
export default InsertionSort;
