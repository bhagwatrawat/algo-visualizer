/*
 * For Tips and Advanced Usage read this Blog Post
 * https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91
 */
import React, { useEffect, useRef, useState } from "react";
import Sketch from "react-p5";
import Sorting from './algorithm/sortingAlgorithm/sorting.js';
import "./App.css";
const App = () => {
  
  return (
    <div className="App">
      <Sorting/>
    </div>
  );
};

export default App;
 