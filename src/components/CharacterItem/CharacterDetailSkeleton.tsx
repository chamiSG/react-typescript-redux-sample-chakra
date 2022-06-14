import {
  Flex,
  Text,
  useColorModeValue,
  Skeleton,
  Stack,
  SimpleGrid,
  StackDivider
} from '@chakra-ui/react';

function CharacterDetailSkeleton() {

  return (
    <Stack w="100%" gap={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
        <Flex justifyContent={'center'}>
          <Skeleton height='300px' width="300px" />
        </Flex>
        <Stack spacing={3}>
          <Stack
            spacing={3}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Skeleton height='15px' width="100%" />
            <Skeleton height='15px' width="100%" />
            <Skeleton height='15px' width="100%" />
            <Skeleton height='15px' width="100%" />
            <Skeleton height='15px' width="100%" />
            <Skeleton height='15px' width="100%" />
            <Skeleton height='15px' width="100%" />
            <Skeleton height='15px' width="100%" />
          </Stack>
        </Stack>
      </SimpleGrid>
      <Stack w="100%">
        <Text fontSize={'md'} fontWeight={600} textAlign={'left'}>Episodes Info</Text>
        <Skeleton height='300px' width="100%" />

      </Stack>
    </Stack>
  );
}

export default CharacterDetailSkeleton;