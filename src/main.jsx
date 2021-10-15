import React from "react"
import ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./Theme"
import Home from "./pages/Home"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
