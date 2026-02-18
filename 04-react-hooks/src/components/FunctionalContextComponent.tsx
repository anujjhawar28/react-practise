import { useThemeContext, useUpdateThemeContext } from "../hooks/UseThemeContext.tsx";

function FunctionalContextComponent() {
  const darkTheme = useThemeContext();
  const toggleTheme = useUpdateThemeContext();

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div
        style={{
          backgroundColor: darkTheme ? "black" : "white",
          color: darkTheme ? "white" : "black",
          padding: "10px",
          marginTop: "10px",
          border: "1px solid black",
        }}
      >
        Division for Theme
      </div>
    </>
  );
}

export default FunctionalContextComponent;
