import "./App.css";
import { useStore } from "./store";
import { useEffect } from "react";

function App() {
  const count = useStore((state) => state.count);
  const inc = useStore((state) => state.inc);
  const name = useStore((state) => state.name);
  const fetchData = useStore((state) => state.fetchData);

  useEffect(() => {
    console.log("use effect");
    if (count === 3) {
      console.log("count 3");
      fetchData();
    }
  }, [count, fetchData]);

  return (
    <>
      <div className="card">
        Name: {name}
        <br />
        <button onClick={inc}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
