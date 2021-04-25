import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

const Home: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <h1>World Trip</h1>
      <p>Teste</p>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </>
  );
};

export default Home;
