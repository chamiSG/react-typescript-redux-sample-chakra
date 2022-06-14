import {
  Text,
  Flex,
  Button,
  Stack,
  SimpleGrid,
  StackDivider,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react"
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchCharacter } from "redux/actions/characterActions"
import { IEpisode } from "types";
import useStatusColorScheme from 'hooks/useStatusColorScheme';
import useDateFormat from 'hooks/useDateFormat';
import TextWithLabel from "components/TextWithLabel";
import CharacterDetailSkeleton from "components/CharacterItem/CharacterDetailSkeleton";

function CharacterDetail(props: any) {

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    props.fetchCharacter(params.id)
  }, [])

  const character = props.character;
  const created = useDateFormat(character.created)
  const statusColor = useStatusColorScheme(character.status)
  return (
    <>
      <Flex py={8} h="100%" gap={10}>
        <Button colorScheme='gray' size={'sm'} display={{ base: 'none', md: 'flex' }} onClick={() => { navigate(-1) }}>
          <FaArrowLeft />
        </Button>
        {character.loading &&
          <CharacterDetailSkeleton />
        }
        {!character.loading &&
          <Stack w="100%" gap={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
              <Flex justifyContent={'center'}>
                <Image
                  rounded={'md'}
                  alt={character.name}
                  src={character.image}
                  objectFit={'cover'}
                />
              </Flex>
              <Stack spacing={3}>
                <Stack
                  spacing={3}
                  divider={
                    <StackDivider />
                  }>
                  <TextWithLabel label="ID" text={character.id} />
                  <TextWithLabel label="Name" text={character.name} />
                  <TextWithLabel label="Status" text={character.status} isBadge={true} badgeColor={statusColor} />
                  <TextWithLabel label="Specie" text={character.species} />
                  <TextWithLabel label="Type" text={character.type} />
                  <TextWithLabel label="Gender" text={character.gender} />
                  <TextWithLabel label="Origin" text={character.origin?.name} />
                  <TextWithLabel label="Created" text={created} />
                </Stack>
              </Stack>
            </SimpleGrid>
            <Stack w="100%">
              <Text fontSize={'md'} fontWeight={600} textAlign={'left'}>Episodes Info</Text>
              <Tabs variant='enclosed'>
                <TabList width={'100%'} >
                  {props.episodes?.data.map((episode: IEpisode, i: any) => (
                    <Tab
                      key={i}
                      flex={{ base: 1, md: 0 }}
                      paddingInlineStart={{ base: 0, md: 4 }}
                      paddingInlineEnd={{ base: 0, md: 4 }}
                      _selected={{ color: 'white', bg: 'primary.600' }}
                      _hover={{ color: 'white', bg: 'primary.500' }}
                    >{episode.episode}</Tab>
                  ))
                  }
                </TabList>
                <TabPanels>
                  {props.episodes?.data.map((episode: IEpisode, i: any) => (
                    <TabPanel key={i} mt={4}>
                      <Stack
                        spacing={2}>
                        <TextWithLabel label="Episode ID" text={episode.id} />
                        <TextWithLabel label="Episode Name" text={episode.name} />
                        <TextWithLabel label="Episode Air Date" text={episode.air_date} />
                        <TextWithLabel label="Episode" text={episode.episode} />
                      </Stack>
                    </TabPanel>
                  ))
                  }
                </TabPanels>
              </Tabs>
            </Stack>
          </Stack>
        }
      </Flex>
    </>
  )
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
  character: state.character,
  episodes: state.episodes,
});
//this map actions to our props in this functional component
const mapActionsToProps = {
  fetchCharacter
};
export default connect(mapStateToProps, mapActionsToProps)(CharacterDetail)
