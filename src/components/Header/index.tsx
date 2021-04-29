import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Flex as="header" w="100%" h={['3.438rem', '6.25rem']} justify="center">
      <Image
        src="/images/logo.svg"
        alt="World Trip"
        width={['81px', '184px']}
      />
    </Flex>
  );
};

export default Header;
