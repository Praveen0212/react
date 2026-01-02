import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [like, setLike]  = useState(0);
  return (
    <div>
      <h2>UseState Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      <h1>Like</h1>
      <p>Count:{like}</p>
      <button onClick={() => setLike(like+1)}>👌</button>
            <button onClick={() => setLike(like-1)}>👎</button>
    </div>
  );
};

export default State;