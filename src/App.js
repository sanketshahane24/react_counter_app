import {useState} from 'react'


function App() {
  const [count,setCount] = useState(0)

  function decrease(){
    setCount(c=>c-1)
  }

  function increase(){
    setCount(c=>c+1)
  }

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
