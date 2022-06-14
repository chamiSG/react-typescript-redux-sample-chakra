import { Link as ReactLink } from "react-router-dom"
import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Text,
  Button,
} from '@chakra-ui/react';
import { ICharacter } from "types"
import useStatusColorScheme from 'hooks/useStatusColorScheme'

function CharacterItem({ character }: {
  character: ICharacter
}) {

  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        <Image
          src={character.image}
          alt={`${character.name}`}
          roundedTop="lg"
        />

        <Flex p="6" direction="column" gap={3}>
          <Flex mt="1" direction="column" justifyContent="start" alignItems="start">
            <Text
              fontSize="md"
              fontWeight="semibold">
              {character.name}
            </Text>
            <Box display="flex" w="100%" mt={2} justifyContent="space-between" alignItems="baseline">
              <Text fontSize="sm" >
                {character.species}
              </Text>
              <Badge rounded="full" px="2" fontSize="xs" textTransform="capitalize" colorScheme={useStatusColorScheme(character.status)}>
                {character.status}
              </Badge>
            </Box>
          </Flex>

          <Flex justifyContent="center" alignContent="center">
            <Button
              w="100%"
              as={ReactLink}
              to={`/detail/${character.id}`}
              colorScheme={'primary'}
              size={'sm'}
              color='white.100'>
              Detail
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default CharacterItem;