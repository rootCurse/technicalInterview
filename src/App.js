import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { MainContainer } from './components/MainContainer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainContainer />
    </ChakraProvider>
  );
}

export default App;
