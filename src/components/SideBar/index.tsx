import {
  Flex,
  Heading,
} from '@chakra-ui/react';
import Filters from "../Filters"

export default function SideBar() {

  return (
    <>
      <Flex display={{ base: 'none', md: 'flex' }} direction="column" alignItems="start" gap={5}>
        <Heading as='h4' size='md'>
          Filter Option
        </Heading>
        <Filters />
      </Flex>
    </>
  );
}