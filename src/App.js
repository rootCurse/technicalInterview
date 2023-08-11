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
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { MainContainer } from './components/MainContainer';
import { Photo } from './components/Photo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainContainer />
    </ChakraProvider>
  );
}

export default App;
