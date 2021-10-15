import { Image } from "@chakra-ui/image"
import { Box, Heading, HStack, Link, Text } from "@chakra-ui/layout"
import { Tag } from "@chakra-ui/tag"

import React from "react"
import avangerLg from "../../sources/lg.jpg"

import amazon from "../../sources/amazon.png"
import disney from "../../sources/disney.jpg"

const Home = () => {
  return (
    <>
      <Box as="header" textAlign="center" my="10px">
        <strong> Logo</strong>
      </Box>
      <Image src={avangerLg} w="100vw" objectFit="cover" />
      <Box mx="20px">
        <Heading as="h1" my="15px">
          Los Vengadores
        </Heading>
        <Text fontSize="sm" noOfLines={5}>
          Los Vengadores (en inglés Avengers; Invencibles del siglo XX en
          antiguas traducciones de México realizadas por Editorial La Prensa)
          son un equipo ficticio de superhéroes que aparecen en los cómics
        </Text>
        <HStack my="10px">
          <Tag colorScheme="purple">Acción</Tag>
          <Tag colorScheme="purple">Aventura</Tag>
          <Tag colorScheme="purple">Drama</Tag>
        </HStack>
        <Heading as="h2" fontWeight="light">
          Donde Encontrar
        </Heading>
        <HStack my="10px">
          <Link isExternal href="https://www.disneyplus.com/">
            <Image
              src={amazon}
              alt="Disney pluz"
              w="100px"
              borderRadius="4px"
            />
          </Link>
          <Link isExternal href="https://www.primevideo.com/">
            <Image
              src={disney}
              alt="amazon video"
              w="100px"
              borderRadius="4px"
            />
          </Link>
        </HStack>
      </Box>
    </>
  )
}

export default Home
