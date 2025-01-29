/* import logo from "./logo.svg"; */
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Pages/Home";
import { extendTheme } from "@chakra-ui/react";
/* import { color } from "framer-motion"; */
import Details from "./Pages/Details";

const themeGreen = extendTheme({
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
  styles: {
    global: {
      /* "html, body": {
        color: "brand.600",
        fontSize: "24px",
        lineHeight: "1.8",
        letterSpacing: "0.56px",
      }, */
      h1: {
        color: "brand.300",
        fontSize: "clamp(2rem, 1.1702rem + 4.2553vw, 5rem);",
        lineHeight: "1.2",
      },
      h2: {
        color: "brand.600",
        fontSize: "clamp(2rem, 1.1702rem + 4.2553vw, 5rem) !important",
        lineHeight: "1.2",
      },
      h4: {
        color: "brand.600",
        fontSize: "clamp(1rem, 0.734rem + 0.8511vw, 1.5rem);",
        lineHeight: "1.2",
        letterSpacing: "2.4px",
      },
      a: {
        color: "teal.500",
      },
      p: {
        color: "brand.600",
        fontSize: "clamp(1rem, 0.734rem + 0.8511vw, 1.5rem);",
        lineHeight: "1.6",
        letterSpacing: "0.56px",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={themeGreen}>
      {/* <Home /> */}
      <Details />
    </ChakraProvider>
  );
}

export default App;
