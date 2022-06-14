import { useMatch, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { Logo } from "components/Logo"
import Filters from "components/Filters"

export default function Header() {
  const navigate = useNavigate();
  const isDetailPage = useMatch('detail/:id');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box pos="fixed" w="100%" backdropFilter="blur(6px)" zIndex={9999} bg={useColorModeValue('white.50', 'gray.50')} px={4}>
        <Flex w="100%" h={16} alignItems={'center'} justifyContent={{ base: 'space-between', md: 'center' }}>
          {isDetailPage === null &&
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          }
          {isDetailPage !== null &&
            <IconButton
              size={'md'}
              icon={<ArrowBackIcon />}
              aria-label={'Back'}
              display={{ md: 'none' }}
              onClick={() => navigate(-1)}
            />
          }

          <Flex w="100%" justifyContent={'center'}>
            <Logo />
          </Flex>

          <Flex alignItems={'center'}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box display='none'>
            <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              isFullHeight={false}
            >
              <DrawerOverlay top={'64px !important'} />
              <DrawerContent top={'64px !important'}>
                <DrawerCloseButton />
                <DrawerHeader>Filter Option</DrawerHeader>
                <DrawerBody>
                  <Filters />
                </DrawerBody>
                <DrawerFooter>
                  <ColorModeSwitcher justifySelf="flex-end" />
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
        ) : null}
      </Box>
    </>
  );
}