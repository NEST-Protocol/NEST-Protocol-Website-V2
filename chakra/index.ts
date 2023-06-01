// theme/index.tsx.js
import { extendTheme } from '@chakra-ui/react'

// Component style overrides
import { Button } from './components/button'
import {Heading} from "./components/heading";
import {Text} from "./components/Text";
import {Link} from "./components/link";

const overrides = {
  // Other foundational style overrides go here
  components: {
    Button,
    Heading,
    Text,
    Link
  },
  breakpoints: {
    sm: '0', // 0px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '1200px', // 1200px
    '2xl': '1600px', // 1600px
  }
}

export default extendTheme(overrides)
