import { extendTheme } from "@chakra-ui/react"

const style = {
  global: {
    "html, body": {
      bg: "purple.800",
      color: "white",
    },
  },
}

export default extendTheme({
  styles: style,
})
