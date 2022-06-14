import {
  VStack,
  InputGroup,
  Input,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { StatusOptions, GenderOptions } from "utils/filterOptions"
import { connect, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { IFilterParam } from 'types';
import { filterCharacters } from "redux/actions/characterActions"
import { SET_FILTER_OPTION } from 'redux/types';

function Filters(props: any) {

  const dispatch = useDispatch();

  const handleFilterByNameChange = (event: any) => {
    if (event.key.toLowerCase() === "enter") {
      dispatch({
        type: SET_FILTER_OPTION,
        payload: { name: event.target.value }
      })
    }
  };

  const handleFilterByStatusChange = (event: any) => {
    dispatch({
      type: SET_FILTER_OPTION,
      payload: { status: event.target.value }
    })
  };

  const handleFilterByGenderChange = (event: any) => {
    dispatch({
      type: SET_FILTER_OPTION,
      payload: { gender: event.target.value }
    })
  };

  useEffect(() => {
    const params: IFilterParam = {
      ...props.filterOption,
      page: 1
    }
    props.filterCharacters(params)
  }, [props.filterOption])

  return (
    <>
      <VStack spacing={10}>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='gray.300' />}
          />
          <Input
            type='text'
            placeholder='Filter By Name'
            onKeyDown={handleFilterByNameChange}
          />
        </InputGroup>

        <Select placeholder='Filter By Status' onChange={handleFilterByStatusChange}>
          {
            StatusOptions.map((status, i) => (
              <option key={i} value={status.value}>{status.label}</option>
            ))
          }
        </Select>
        <Select placeholder='Filter By Gender' onChange={handleFilterByGenderChange}>
          {
            GenderOptions.map((gender, j) => (
              <option key={j} value={gender.value}>{gender.label}</option>
            ))
          }
        </Select>
      </VStack>
    </>
  );
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
  filterOption: state.filterOption,
  ui: state.ui,
});
//this map actions to our props in this functional component
const mapActionsToProps = {
  filterCharacters
};
export default connect(mapStateToProps, mapActionsToProps)(Filters)
