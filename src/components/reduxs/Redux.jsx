const ADD_MOVIE = 'movie/ADD_MOVIE';
const DELITE_MOVIE = 'movie/DELITE_MOVIE';


let index = 1;
export const addMovie = (imgUrls) => ({
  type: ADD_MOVIE,
  url: {
    id: index++,
    imgUrls
  }
});
export const deliteMovie = (id) => ({
  type: DELITE_MOVIE,
  id
});


const initialState = [
  {
    Whether: false,
    imgUrl: 'https://occ-0-4532-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSy7Ls52a6S7O0UVGuMH_sTvI2jCa7v3IW18Si2dcYW1MYzg2ZzgcozlDQYUh-3wnuCzwBBYg1zl5DnWb7twCoPEHGmA.webp?r=663',
  }
]

export default function movie(state = initialState, action){
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        imgUrl: state.imgUrl,
        Whether:true
      };
    case DELITE_MOVIE:
      return {
        ...state,
        imgUrl: state.imgUrl,
        Whether:false
      };
    default:
      return state;
  }
}
