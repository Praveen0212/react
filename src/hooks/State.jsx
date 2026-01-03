import { useEffect, useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0);

  useEffect(() => {
    console.log("from useEffect");
  }, [count]);

  return (
    <div>
      <h2>useState Component</h2>

      <h3>Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => Math.max(0, prev - 1))}>-</button>

      <h3>Like</h3>
      <p>Count: {like}</p>
      <button onClick={() => setLike(prev => prev + 1)}>👌</button>
      <button onClick={() => setLike(prev => Math.max(0, prev - 1))}>👎</button>
    </div>
  );
};

export default State;
