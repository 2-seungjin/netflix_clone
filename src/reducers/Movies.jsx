
// Action
const ADD_MOVIES = 'ADD_MOVIES';
const DEL_MOVIES = 'DEL_MOVIES';

let nextid = 1;
export const addMovies = (imgUrl) => ({
  type: 'ADD_MOVIES',
  img:{
    id:nextid++,
    imgUrl
  }
})
export const delMovies = (id) => ({
  type: 'DEL_MOVIES',
  id
})

export const initialState = [
  {
    id:1,
    imgUrl: 'https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSy7Ls52a6S7O0UVGuMH_sTvI2jCa7v3IW18Si2dcYW1MYzg2ZzgcozlDQYUh-3wnuCzwBBYg1zl5DnWb7twCoPEHGmA.webp?r=663'
  },
  {
    id:2,
    imgUrl: 'https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSy7Ls52a6S7O0UVGuMH_sTvI2jCa7v3IW18Si2dcYW1MYzg2ZzgcozlDQYUh-3wnuCzwBBYg1zl5DnWb7twCoPEHGmA.webp?r=663'
  },
  {
    id:3,
    imgUrl: 'https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSy7Ls52a6S7O0UVGuMH_sTvI2jCa7v3IW18Si2dcYW1MYzg2ZzgcozlDQYUh-3wnuCzwBBYg1zl5DnWb7twCoPEHGmA.webp?r=663'
  },
  {
    id:4,
    imgUrl: 'https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSy7Ls52a6S7O0UVGuMH_sTvI2jCa7v3IW18Si2dcYW1MYzg2ZzgcozlDQYUh-3wnuCzwBBYg1zl5DnWb7twCoPEHGmA.webp?r=663'
  },
];

export function reducer(state = initialState, action){
  switch (action.type){
    case ADD_MOVIES:
      console.log(action);
      return{
        ...state,
        imgUrl: state.imgUrl.concat(action.url)
      }
    case DEL_MOVIES:
      return{
        ...state,
        imgUrl: state.imgUrl.filter(movie => movie.id !== action.id)
      }
    default:
      return state;
  }

}

export default reducer;
