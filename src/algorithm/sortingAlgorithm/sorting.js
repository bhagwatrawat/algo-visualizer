import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
    import SelectionSort from './selectionSort';
    import InsertionSort from './insertionSort';
function Sorting() {
  return (
    <div>
        <ul>
            <li className="" onClick>Selection Sort</li>
            <li className="">Insertion Sort</li>
        </ul>
            <Routes>
            <Switch>
                <Route path="/selectionSort" element ={<SelectionSort/>}/>
                <Route path="/insertionSort" element ={<InsertionSort/>}/>
            </Switch>  
            </Routes> 
        <SelectionSort/>
    </div>
  )
}

export default Sorting