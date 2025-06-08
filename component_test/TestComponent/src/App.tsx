// import {Button} from "fcb-ui"
import './App.css'
import { useState } from "react";
import { useCallback } from "react";
function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setTimeout(() => {
      console.log("count in timeout:", count); // 👈 这里会出问题
    }, 1000);

    setCount(c => c + 1);
  }, [count]);

  return <button onClick={handleClick}>Click me</button>;
}


export default App
