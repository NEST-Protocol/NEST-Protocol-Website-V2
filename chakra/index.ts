// theme/index.tsx.js
import { extendTheme } from '@chakra-ui/react'

// Component style overrides
import { Button } from './components/button'
import {Heading} from "./components/heading";

const overrides = {
  // Other foundational style overrides go here
  components: {
    Button,
    Heading,
  }
}

export default extendTheme(overrides)
