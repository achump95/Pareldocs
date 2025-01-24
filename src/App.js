/* import logo from "./logo.svg"; */
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Pages/Home";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "'Playfair Display', serif",
    heading: "'Playfair Display', serif",
    mono: "",
  },
  colors: {
    brand: {
      100: "#FFFFFF",
      200: "#F2EDE6",
      300: "#E0E3D2",
      400: "#707070",
      500: "#6C6D5B",
      600: "#555E47",
      700: "#AA9966",
      800: "#4B2424",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
