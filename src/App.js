/*
 * For Tips and Advanced Usage read this Blog Post
 * https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91
 */
import React, { useEffect, useRef, useState } from "react";
import Sketch from "react-p5";
import SelectionSort from "./algorithm/sortingAlgorithm/selectionSort";
import InsertionSort from "./algorithm/sortingAlgorithm/insetionSort";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/selectionSort" element={<SelectionSort />} />
          <Route path="/insertionSort" element={<InsertionSort />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
