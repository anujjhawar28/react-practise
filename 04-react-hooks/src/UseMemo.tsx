import { useEffect, useMemo, useState } from "react";

function slowFunction(num: number) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [isDark, setDark] = useState(false);
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: isDark ? "black" : "white",
      color: isDark ? "white" : "black",
      padding: "10px",
      marginTop: "10px",
    };
  }, [isDark]);
  
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyle]);

  const toggleTheme = () => {
    setDark((pre) => !pre);
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p style={themeStyle}>{doubleNumber}</p>
    </>
  );
}

export default UseMemo;
