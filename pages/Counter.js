// import React, { useState } from 'react';

// const Counter=()=> {
//     const[count,setCount]=useState(0);
//     const increment = () => {
//         setCount(count+1);
//     };
//     const decrement = () => {
//         setCount(count-1);

//     };

  
//   return (
//     <div>
//           <h1> counter</h1>
//           <p>Count:{count}</p>
//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;



import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component did mount');

    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
