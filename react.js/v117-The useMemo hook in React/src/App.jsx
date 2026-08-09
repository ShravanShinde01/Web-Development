import { useState,useMemo } from "react";

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000
  };
});

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  // const magical = numbers.find(item => item.isMagical === true);

  const magical = useMemo(() => numbers.find(item => item.isMagical === true), [])

  return (
    <>
      <h1 className="m-20 p-10 border-2 bg-lime-500 text-gray-950 ">Magical Number is {magical.index}</h1>

      <button
        type="button"
        className="text-violet-700 font-extrabold bg-amber-500 p-3 pl-6 pr-6 border-2 m-20 rounded-4xl counter"
        onClick={() => setCount(count => count + 1)}
      >
        Count is {count}
      </button>
    </>
  );
}

export default App;