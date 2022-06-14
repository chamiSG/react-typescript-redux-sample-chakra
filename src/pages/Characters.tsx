import {
  Flex,
  Center,
  Divider,
  Stack,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import {
  Pagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
  PaginationSeparator,
} from "@ajna/pagination";
import { connect } from "react-redux";
import { filterCharacters } from "redux/actions/characterActions"
import SideBar from "components/SideBar";
import CharacterItem from "components/CharacterItem"
import { ICharacter, IFilterParam } from "types";
import CharacterSkeleton from "components/CharacterItem/CharacterSkeleton";


function Characters (props: any){
  const {
    setCurrentPage,
    pages,
  } = usePagination({
    pagesCount: props.pagination.pageCount,
    initialState: { 
      currentPage: props.pagination.currentPage,
    },
    limits: {
      outer: 1,
      inner: 1
    },
  });
  
  const handlePageChange = (nextPage: number): void => {
    setCurrentPage(nextPage);
    const params: IFilterParam = {
      ...props.filterOption,
      page: nextPage
    }
    props.filterCharacters(params)
  };
  
  const error = props.ui.errors?.error;

  return (
    <Flex py={8} h="100%" gap={10}>
      <SideBar />
      <Center display={{ base: 'none', md: 'flex' }}>
        <Divider height={'100%'} orientation='vertical' borderColor="gray.500" />
      </Center>

      <Stack w="100%">
        {!error && props.characters?.loading && 
          <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={{base: 10, md: 6}}>
            <GridItem>
              <CharacterSkeleton />
            </GridItem>
            <GridItem>
              <CharacterSkeleton />
            </GridItem>
            <GridItem>
              <CharacterSkeleton />
            </GridItem>
            <GridItem>
              <CharacterSkeleton />
            </GridItem>
            <GridItem>
              <CharacterSkeleton />
            </GridItem>
            <GridItem>
              <CharacterSkeleton />
            </GridItem>
          </Grid>
        }
        {!error && !props.characters?.loading && 
          <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={{base: 10, md: 6}}>
            {
              props.characters?.results.map((character: ICharacter) => (
                <GridItem key={character.id}>
                  <CharacterItem character={character}></CharacterItem>
                </GridItem>
              ))
            }
          </Grid>
        }
        { error && 
          <Flex justifyContent={'center'} color="grey.600">
            <Text>{error}</Text>
          </Flex>
        }
        { !error && 
          <Stack>
            <Pagination
              pagesCount={props.pagination.pageCount}
              currentPage={props.pagination.currentPage}
              onPageChange={handlePageChange}
            >
              <PaginationContainer
                align="center"
                justify="center"
                p={4}
                w="full"
                gap={2}
              >
                <PaginationPrevious
                  w="2rem"
                  variant={'outline'}
                  colorScheme="primary"
                >
                  <FaChevronLeft />
                </PaginationPrevious>
                <PaginationPageGroup
                  isInline
                  align="center"
                  separator={
                    <PaginationSeparator
                      w="2rem"
                      variant={'outline'}
                      colorScheme="primary"
                      jumpSize={11}
                    />
                  }
                >
                  {pages.map((page: number, i) => (
                    <PaginationPage
                      w='2rem'
                      key={i}
                      page={page}
                      fontSize="sm"
                      _hover={{
                        bg: "primary.500",
                        color: "white",
                      }}
                      _current={{
                        bg: "primary.500",
                        color: "white",
                        fontSize: "sm",
                        w: "2rem"
                      }}
                    />
                  ))}
                </PaginationPageGroup>
                <PaginationNext
                  w="2rem"
                  variant={'outline'}
                  colorScheme="primary"
                >
                  <FaChevronRight />
                </PaginationNext>
              </PaginationContainer>
            </Pagination>
          </Stack>
        }
      </Stack>

    </Flex>
  )
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
  ui: state.ui,
  characters: state.characters,
  pagination: state.pagination,
  filterOption: state.filterOption,
});

//this map actions to our props in this functional component
const mapActionsToProps = {
  filterCharacters
};

export default connect(mapStateToProps, mapActionsToProps)(Characters)
