// theme/index.tsx.js
import { extendTheme } from '@chakra-ui/react'

// Component style overrides
import { Button } from './components/button'
import {Heading} from "./components/heading";
import {Text} from "./components/Text";

const overrides = {
  // Other foundational style overrides go here
  components: {
    Button,
    Heading,
    Text
  }
}

export default extendTheme(overrides)
