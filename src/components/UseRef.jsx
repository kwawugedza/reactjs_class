import { useEffect, useRef, useState } from "react";
import './useEffect.css'

export default function Incre() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    countRef.current++;

    console.log("Ref:", countRef.current); 
  };

  useEffect(() => {
    console.log("State:", count); 
  }, [count]);

  return (
    <div className="useEff">
        <h3>Enumeration Using UseRef </h3><br/>
      <h4>Booster: {count}</h4><br/>
      <button onClick={handleIncrement}>Tap To Increase Value by +1</button>
    </div>
  );
}
