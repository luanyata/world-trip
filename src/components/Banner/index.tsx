import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Flex w="100%">
      <Image
        src="/images/background.png"
        width="100%"
        height={['163px', '335px']}
        position="relative"
      />

      <Flex px="140px" py="80px" position="absolute" w="524px" flexDir="column">
        <Text as="p" fontSize="2.25rem" w="426px">
          5 continers,
        </Text>
        <Text as="p" fontSize="2.25rem" w="426px">
          infinitas Possibilidades
        </Text>

        <Text
          as="p"
          w="524px"
          fontSize="1.25rem"
          lineHeight="30px"
          fontWeight="400"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou
        </Text>
      </Flex>
    </Flex>
  );
};

export default Banner;
