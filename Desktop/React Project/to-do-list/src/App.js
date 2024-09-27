import React,{ useEffect ,useState } from 'react';
import './App.css';
import { TaskManager } from './TaskManager';

function App() {
  const[data, setData] = useState([]);
  
  useEffect(() => {
    setData(WorkData)
  },[]);
  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
