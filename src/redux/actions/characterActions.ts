import { SET_CHARACTERS, SET_CHARACTER, SET_ERRORS, CLEAR_ERRORS, SET_EPISODES, SET_PAGINATION} from '../types'
import axios from 'utils/axios';
import { IEpisode, IFilterParam } from 'types';

//for fetching and filter charactors information
export const filterCharacters = (param: IFilterParam) => (dispatch: any) => {
  
  axios.get(`/character/?name=${param.name}&status=${param.status}&gender=${param.gender}&page=${param.page}`)
    .then(res => {
      dispatch({
        type: SET_PAGINATION,
        payload: {
          currentPage: param.page,
          pageCount: res.data?.info.pages
        }
      });
      dispatch({
        type: SET_CHARACTERS,
        payload: res.data
      });

      dispatch({ type: CLEAR_ERRORS });

    }).catch(err => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: {errors: err.response.data}
      });
      dispatch({
        type: SET_CHARACTERS,
        payload: []
      });
    });
}

export const fetchCharacter = (id: number) => (dispatch: any) => {
  axios.get(`/character/${id}`)
    .then( async (res) => {
      dispatch({
        type: SET_CHARACTER,
        payload: res.data
      });

      let results: IEpisode[] = [];
      const episodes = res.data.episode;
      let count = 5;
      if(episodes.length < 5){
        count = episodes.length
      }

      for (let i = 0; i < count; i++){
        let response = await axios.get(episodes[i])
        results.push(response.data); 
      }
     
      dispatch({
        type: SET_EPISODES,
        payload: {
          data: results
        }
      });
      dispatch({ type: CLEAR_ERRORS });
      
    }).catch(err => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: {errors: err.response.data}
      });
    });
}


