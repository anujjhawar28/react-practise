
import FunctionalContextComponent from "./components/FunctionalContextComponent";
import ThemeProvider from "./hooks/UseThemeContext";


function UseToggle() {
  return (
    <ThemeProvider>
      <FunctionalContextComponent />
    </ThemeProvider>
  );
}

export default UseToggle;
