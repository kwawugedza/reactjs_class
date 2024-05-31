import { useEffect, useState } from 'react';
import './useEffect.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('The count is:', count);

   
    return () => {
      console.log('Count successful!');
    };
  }, [count]); 

  return (
    <div className='useEff'>
      <h3>Counter App Using UseEffect </h3><br/>

      <h4>Count: {count}</h4><br/>
      <button onClick={() => setCount(count - 1)}>
      Add -1

      </button>
      <button onClick={() => setCount(count + 1)}>
    Add +1
      </button>
    </div>
  );
}
